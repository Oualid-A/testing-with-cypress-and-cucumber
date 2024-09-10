const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    specPattern: ['cypress/integration/**/*.feature', 'cypress/tests/**/*.spec.js'],
    baseUrl: "https://reqres.in/api/",
    pageLoadTimeout: 10000,
    screenshotOnRunFailure: true,
  },
  video: false,
  defaultCommandTimeout: 5000,
  viewportHeight: 900,
  viewportWidth: 1900,
});
