// @ts-check
const { defineConfig, devices } = require("@playwright/test");
const {
  "liveServer.settings.port": liveServerPort,
} = require("./.vscode/settings.json");
const mainPageUrl = `http://localhost:${liveServerPort}/`;

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: mainPageUrl,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
}); 