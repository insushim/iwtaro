const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// Minimal valid PNG generator
// Creates a solid-color square PNG with a simple star shape
function createPNG(size) {
  // PNG file structure:
  // Signature + IHDR + IDAT (uncompressed) + IEND

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0); // width
  ihdrData.writeUInt32BE(size, 4); // height
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // color type: RGB
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = createChunk("IHDR", ihdrData);

  // Generate pixel data with star on dark background
  const bgR = 10,
    bgG = 10,
    bgB = 26; // #0a0a1a
  const starR = 212,
    starG = 165,
    starB = 116; // #d4a574

  // Star points (normalized 0-1)
  const cx = 0.5,
    cy = 0.5;
  const outerR = 0.35,
    innerR = 0.14;
  const points = 5;
  const starVertices = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (Math.PI / 2) * 3 + (Math.PI / points) * i;
    const r = i % 2 === 0 ? outerR : innerR;
    starVertices.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    });
  }

  function isInsideStar(px, py) {
    // Ray casting algorithm
    let inside = false;
    const n = starVertices.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const xi = starVertices[i].x,
        yi = starVertices[i].y;
      const xj = starVertices[j].x,
        yj = starVertices[j].y;
      if (
        yi > py !== yj > py &&
        px < ((xj - xi) * (py - yi)) / (yj - yi) + xi
      ) {
        inside = !inside;
      }
    }
    return inside;
  }

  // Raw pixel data (filter byte + RGB for each row)
  const rawData = Buffer.alloc(size * (1 + size * 3));
  for (let y = 0; y < size; y++) {
    const rowOffset = y * (1 + size * 3);
    rawData[rowOffset] = 0; // no filter
    for (let x = 0; x < size; x++) {
      const px = (x + 0.5) / size;
      const py = (y + 0.5) / size;
      const pixOffset = rowOffset + 1 + x * 3;
      if (isInsideStar(px, py)) {
        rawData[pixOffset] = starR;
        rawData[pixOffset + 1] = starG;
        rawData[pixOffset + 2] = starB;
      } else {
        rawData[pixOffset] = bgR;
        rawData[pixOffset + 1] = bgG;
        rawData[pixOffset + 2] = bgB;
      }
    }
  }

  // Compress using Node's built-in zlib
  const zlibData = zlib.deflateSync(rawData);
  const idat = createChunk("IDAT", zlibData);

  // IEND chunk
  const iend = createChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuffer = Buffer.from(type, "ascii");
  const crcData = Buffer.concat([typeBuffer, data]);
  const crc = crc32(crcData);
  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc, 0);
  return Buffer.concat([length, typeBuffer, data, crcBuffer]);
}

function crc32(data) {
  // CRC-32 lookup table
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = table[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Generate icons for each density
const densities = {
  "mipmap-mdpi": 48,
  "mipmap-hdpi": 72,
  "mipmap-xhdpi": 96,
  "mipmap-xxhdpi": 144,
  "mipmap-xxxhdpi": 192,
};

const resDir = path.join(
  __dirname,
  "..",
  "android",
  "app",
  "src",
  "main",
  "res",
);

for (const [dir, size] of Object.entries(densities)) {
  const outDir = path.join(resDir, dir);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const png = createPNG(size);
  fs.writeFileSync(path.join(outDir, "ic_launcher.png"), png);
  console.log(`Generated ${dir}/ic_launcher.png (${size}x${size})`);
}

console.log("Done! All launcher icons generated.");
