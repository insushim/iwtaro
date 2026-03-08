import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const iconsDir = join(import.meta.dirname, "..", "public", "icons");
const publicDir = join(import.meta.dirname, "..", "public");
const svgBuffer = readFileSync(join(iconsDir, "icon.svg"));

// Generate regular icons
const sizes = [16, 32, 48, 64, 128, 180, 192, 512];
for (const size of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(join(iconsDir, `icon-${size}.png`));
  console.log(`Generated icon-${size}.png`);
}

// Generate maskable icons (with padding for safe zone)
for (const size of [192, 512]) {
  const innerSize = Math.round(size * 0.7);
  const padding = Math.round((size - innerSize) / 2);

  const inner = await sharp(svgBuffer)
    .resize(innerSize, innerSize)
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 10, g: 10, b: 26, alpha: 1 },
    },
  })
    .composite([{ input: inner, left: padding, top: padding }])
    .png()
    .toFile(join(iconsDir, `icon-maskable-${size}.png`));

  console.log(`Generated icon-maskable-${size}.png`);
}

// Generate apple-touch-icon
await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(join(iconsDir, "apple-touch-icon.png"));
console.log("Generated apple-touch-icon.png");

// Generate favicon.ico (use 32x32 PNG as base)
const favicon32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
writeFileSync(join(publicDir, "favicon.ico"), favicon32);
// Also write to src/app for Next.js
writeFileSync(
  join(import.meta.dirname, "..", "src", "app", "favicon.ico"),
  favicon32,
);
console.log("Generated favicon.ico");

// Generate OG image (1200x630) for social sharing
const ogWidth = 1200;
const ogHeight = 630;
const iconSize = 280;
const iconBuffer = await sharp(svgBuffer)
  .resize(iconSize, iconSize)
  .png()
  .toBuffer();

// Create dark background with icon centered and text
const ogSvgOverlay = Buffer.from(`
<svg width="${ogWidth}" height="${ogHeight}">
  <defs>
    <linearGradient id="ogGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f0d48a"/>
      <stop offset="50%" stop-color="#d4a574"/>
      <stop offset="100%" stop-color="#b8864e"/>
    </linearGradient>
  </defs>
  <!-- Subtitle -->
  <text x="600" y="520" text-anchor="middle" font-family="Georgia, serif" font-size="32" fill="#d4a574" opacity="0.8" letter-spacing="3">AI-Powered Tarot Reading</text>
  <!-- Decorative line -->
  <line x1="380" y1="545" x2="820" y2="545" stroke="#d4a574" stroke-width="1" opacity="0.3"/>
  <!-- Small tagline -->
  <text x="600" y="580" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#8b5cf6" opacity="0.7" letter-spacing="2">Ancient Wisdom × Modern AI</text>
</svg>
`);

await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 4,
    background: { r: 10, g: 10, b: 26, alpha: 1 },
  },
})
  .composite([
    {
      input: iconBuffer,
      left: Math.round((ogWidth - iconSize) / 2),
      top: Math.round((ogHeight - iconSize) / 2) - 60,
    },
    { input: ogSvgOverlay, left: 0, top: 0 },
  ])
  .png()
  .toFile(join(publicDir, "og-image.png"));
console.log("Generated og-image.png (1200x630)");

console.log("\nAll icons generated successfully!");
