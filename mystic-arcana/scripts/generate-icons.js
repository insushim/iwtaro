/**
 * Generate PNG icons for PWA from SVG
 * Run with: node scripts/generate-icons.js
 *
 * This creates minimal valid PNG files. For production, replace with
 * properly designed icons exported from a design tool.
 */

const fs = require("fs");
const path = require("path");

// Minimal PNG generator - creates a simple colored square PNG
// PNG file format: signature + IHDR + IDAT + IEND
function createPNG(size, isMAskable) {
  const width = size;
  const height = size;

  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // color type: RGB
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = createChunk("IHDR", ihdrData);

  // Image data: create a simple gradient icon
  const rawData = Buffer.alloc(height * (1 + width * 3)); // filter byte + RGB per pixel

  for (let y = 0; y < height; y++) {
    const rowStart = y * (1 + width * 3);
    rawData[rowStart] = 0; // no filter

    for (let x = 0; x < width; x++) {
      const px = rowStart + 1 + x * 3;
      const cx = x - width / 2;
      const cy = y - height / 2;
      const dist = Math.sqrt(cx * cx + cy * cy);
      const maxDist = width / 2;
      const normalizedDist = dist / maxDist;

      if (isMAskable) {
        // Maskable: fill entire area, safe zone is inner 80%
        const inSafeZone = normalizedDist < 0.4;
        if (normalizedDist > 1.0) {
          // Corner: dark background
          rawData[px] = 10;
          rawData[px + 1] = 10;
          rawData[px + 2] = 26;
        } else if (inSafeZone) {
          // Gold star area
          const angle = Math.atan2(cy, cx);
          const starRadius = 0.25 + 0.15 * Math.cos(5 * angle);
          const isStar = normalizedDist < starRadius;
          if (isStar) {
            rawData[px] = 201; // gold R
            rawData[px + 1] = 168; // gold G
            rawData[px + 2] = 76; // gold B
          } else {
            // Dark purple bg
            const f = 1 - normalizedDist;
            rawData[px] = Math.floor(26 * f);
            rawData[px + 1] = Math.floor(26 * f);
            rawData[px + 2] = Math.floor(62 * f);
          }
        } else {
          // Outer area: dark gradient
          const f = 1 - normalizedDist;
          rawData[px] = Math.floor(15 * f);
          rawData[px + 1] = Math.floor(15 * f);
          rawData[px + 2] = Math.floor(35 * f);
        }
      } else {
        // Regular icon: circular with transparent corners (use dark bg for non-alpha PNG)
        if (normalizedDist > 0.95) {
          // Outside circle: very dark
          rawData[px] = 10;
          rawData[px + 1] = 10;
          rawData[px + 2] = 26;
        } else if (normalizedDist > 0.9) {
          // Edge ring: gold border
          rawData[px] = 201;
          rawData[px + 1] = 168;
          rawData[px + 2] = 76;
        } else {
          // Inside circle
          const angle = Math.atan2(cy, cx);
          const starRadius = 0.35 + 0.2 * Math.cos(5 * angle);
          const isStar = normalizedDist < starRadius;

          if (isStar) {
            // Gold star
            const brightness = 1 - normalizedDist * 0.5;
            rawData[px] = Math.floor(201 * brightness);
            rawData[px + 1] = Math.floor(168 * brightness);
            rawData[px + 2] = Math.floor(76 * brightness);
          } else {
            // Dark purple background gradient
            const f = 1 - normalizedDist * 0.8;
            rawData[px] = Math.floor(20 * f);
            rawData[px + 1] = Math.floor(16 * f);
            rawData[px + 2] = Math.floor(50 * f);
          }
        }
      }
    }
  }

  // Compress with zlib (deflate)
  const zlib = require("zlib");
  const compressed = zlib.deflateSync(rawData);
  const idat = createChunk("IDAT", compressed);

  // IEND chunk
  const iend = createChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeBuffer = Buffer.from(type, "ascii");
  const crcInput = Buffer.concat([typeBuffer, data]);

  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcInput), 0);

  return Buffer.concat([length, typeBuffer, data, crc]);
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const iconsDir = path.join(__dirname, "..", "public", "icons");

// Ensure directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const icons = [
  { name: "icon-192.png", size: 192, maskable: false },
  { name: "icon-512.png", size: 512, maskable: false },
  { name: "icon-maskable-192.png", size: 192, maskable: true },
  { name: "icon-maskable-512.png", size: 512, maskable: true },
];

for (const icon of icons) {
  const filePath = path.join(iconsDir, icon.name);
  console.log(`Generating ${icon.name} (${icon.size}x${icon.size})...`);
  const png = createPNG(icon.size, icon.maskable);
  fs.writeFileSync(filePath, png);
  console.log(`  -> ${filePath} (${png.length} bytes)`);
}

console.log("\nAll icons generated successfully!");
