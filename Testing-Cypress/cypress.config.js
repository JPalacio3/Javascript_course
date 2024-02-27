const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1500,
  viewportWidth: 1200,
  videoCompression: 0,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
