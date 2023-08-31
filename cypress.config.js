const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    baseUrl: "https://10.64.248.42:8083/"
  },
  compilerOptions: {
    "types": ["cypress", "node", "cypress-real-events", "cypress-cucumber-preprocessor"]
  },
  defaultCommandTimeout: 60000,
  numTestsKeptInMemory: 0,
  viewportHeight: 720,
  viewportWidth: 1280
});