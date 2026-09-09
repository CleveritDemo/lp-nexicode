import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const designPath = resolve(root, "design.md");
const outputPath = resolve(root, "src/app/tokens.css");

async function syncTokens() {
  const design = await readFile(designPath, "utf8");
  const match = design.match(/@theme\s*\{[\s\S]*?\}/);

  if (!match) {
    throw new Error("No se encontro un bloque @theme { ... } en design.md");
  }

  const output = `/* Auto-generated from design.md. Do not edit manually. */\n${match[0]}\n`;
  await writeFile(outputPath, output);
  console.log(`[tokens] synced ${new Date().toLocaleTimeString()}`);
}

syncTokens().catch((error) => {
  console.error(`[tokens] ${error.message}`);
  process.exit(1);
});
