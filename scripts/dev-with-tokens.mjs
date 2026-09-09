import { spawn } from "node:child_process";
import { watch } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const designPath = resolve(root, "design.md");

function run(command, args, options = {}) {
  return spawn(command, args, {
    cwd: root,
    env: process.env,
    shell: process.platform === "win32",
    stdio: "inherit",
    ...options,
  });
}

function syncTokens() {
  const child = run("node", ["scripts/sync-design-tokens.mjs"]);

  child.on("exit", (code) => {
    if (code && code !== 0) {
      console.error(`[tokens] sync failed with exit code ${code}`);
    }
  });
}

syncTokens();

let pendingSync;
const watcher = watch(designPath, () => {
  clearTimeout(pendingSync);
  pendingSync = setTimeout(syncTokens, 80);
});

const next = run("next", ["dev"]);

function shutdown(signal) {
  watcher.close();
  next.kill(signal);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

next.on("exit", (code) => {
  watcher.close();
  process.exit(code ?? 0);
});
