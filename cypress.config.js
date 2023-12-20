const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7wiegz",
  viewportHeight: 768,
  viewportWidth: 1366,
  pageLoadTimeout: 100_000,
  numTestsKeptInMemory: 1,
  // screenshotsFolder: `cypress/reports/all/dev/chrome/11-23-2023/desktop/screenshots`,
  // videosFolder: `cypress/reports/all/dev/chrome/11-23-2023/desktop/videos`,
  // downloadsFolder: `cypress/reports/all/dev/chrome/11-23-2023/desktop/downloads`,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    code: false,
    charts: true,
    // reportDir: `cypress/reports/all/dev/chrome/11-23-2023/desktop`,
    reportFilename: `Daily-Reports`,
    reportPageTitle: `Daily-Reports`,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    // overwrite: false,
  },
  video: true,
  e2e: {
    scrollBehavior: false,
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    excludeSpecPattern: [
      "cypress/e2e/**/hover.cy.js",
      "cypress/e2e/**/screenshoot.cy.js",
      "cypress/e2e/**/new-page.cy.js",
      "cypress/e2e/**/website.cy.js",
      "cypress/e2e/**/parallel-1.cy.js",
      "cypress/e2e/**/parallel-2.cy.js",
    ]
  },
});
