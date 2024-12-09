const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    allureResultsPath: 'allure-results',
    specPattern: "**/*.feature",
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://www.demoblaze.com",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true
    }
  }
});