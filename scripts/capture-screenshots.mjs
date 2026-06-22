import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/projects");

const sites = [
  { name: "food-del", url: "https://food-del-front-xlyl.onrender.com", wait: 8000 },
  { name: "prescripto", url: "https://doctors-24.netlify.app/", wait: 5000 },
  { name: "quiz-app", url: "https://quizcraft-ts.netlify.app", wait: 5000 },
  { name: "product-showcase", url: "https://primeshowcase.netlify.app/", wait: 5000 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const site of sites) {
  console.log(`Capturing ${site.name}...`);
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(site.wait);
    await page.screenshot({
      path: path.join(outDir, `${site.name}.png`),
      fullPage: false,
    });
    console.log(`Saved ${site.name}.png`);
  } catch (err) {
    console.error(`Failed ${site.name}:`, err.message);
  }
}

await browser.close();
