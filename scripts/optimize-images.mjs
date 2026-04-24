import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, "../img");
const publicDir = join(__dirname, "../public");

const conversions = [
  { input: "DP_2.JPG", output: "hero.webp", width: 800 },
  { input: "DP_4.JPG", output: "about.webp", width: 800 },
];

for (const { input, output, width } of conversions) {
  await sharp(join(imgDir, input))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(join(imgDir, output));

  console.log(`${input} → img/${output}`);
}

await sharp(join(imgDir, "DP_2.JPG"))
  .resize({ width: 1200, height: 630, fit: "cover", position: "top" })
  .webp({ quality: 85 })
  .toFile(join(publicDir, "og-image.webp"));

console.log("DP_2.JPG → public/og-image.webp (OG)");
