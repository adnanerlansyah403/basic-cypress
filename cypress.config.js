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
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    scrollBehavior: false,
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'electron') {
          return launchOptions
        }

        if (browser.name === 'chrome') {
          launchOptions.args.push('--headed chrome');
        } else if (browser.name === 'edge') {
          launchOptions.args.push('--headed edge');
        } else {
          launchOptions.args.push('--headed firefox');
        }

        // whatever you return here becomes the launchOptions
        return launchOptions
      })

    },
    // specPattern: 'cypress/e2e/all.cy.js',
    excludeSpecPattern: [
      // "cypress/e2e/**/hover.cy.js",
      "cypress/e2e/**/access-website.cy.js",
      "cypress/e2e/**/multiple-browser.cy.js",
      // "cypress/e2e/**/multiple-describe.cy.js",
      "cypress/e2e/**/screenshoot.cy.js",
      "cypress/e2e/**/new-page.cy.js",
      "cypress/e2e/**/website.cy.js",
      "cypress/e2e/**/parallel-1.cy.js",
      "cypress/e2e/**/parallel-2.cy.js",
    ]
  },
});
