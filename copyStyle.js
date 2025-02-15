import { promises as fs } from "fs";

async function copyCSS() {
  try {
    await fs.copyFile("src/style.css", "dist/style.css");
    console.log("style.css copied to dist/");
  } catch (error) {
    console.error("Error copying style.css:", error);
  }
}

copyCSS();
