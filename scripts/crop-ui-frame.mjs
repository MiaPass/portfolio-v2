import sharp from "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";
import { writeFileSync } from "node:fs";

const [, , input, output] = process.argv;
if (!input || !output) {
  console.error("Usage: node scripts/crop-ui-frame.mjs <input> <output>");
  process.exit(1);
}

const image = sharp(input);
const { width, height, channels } = await image
  .raw()
  .ensureAlpha()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => ({
    data,
    width: info.width,
    height: info.height,
    channels: info.channels,
    buffer: data,
  }));

const { data } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

function isUiPixel(i) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  // White-ish app canvas (not dark Figma chrome)
  return r > 220 && g > 220 && b > 220;
}

let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;
let count = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    if (isUiPixel(i)) {
      count++;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

if (count < 1000) {
  console.error("Could not detect UI frame; copying full image");
  await sharp(input).png().toFile(output);
  process.exit(0);
}

// Pad a little, then clamp
const pad = 2;
minX = Math.max(0, minX - pad);
minY = Math.max(0, minY - pad);
maxX = Math.min(width - 1, maxX + pad);
maxY = Math.min(height - 1, maxY + pad);

const cropWidth = maxX - minX + 1;
const cropHeight = maxY - minY + 1;

await sharp(input)
  .extract({ left: minX, top: minY, width: cropWidth, height: cropHeight })
  .png()
  .toFile(output);

console.log(
  `Cropped ${width}x${height} -> ${cropWidth}x${cropHeight} at (${minX},${minY})`,
);
writeFileSync(
  output + ".meta.json",
  JSON.stringify({ minX, minY, cropWidth, cropHeight }, null, 2),
);
