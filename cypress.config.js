const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/mocha/**/*.js',
    // specPattern: 'cypress/e2e/cucumber/*.feature',
    // baseUrl: 'https://www.webdriveruniversity.com/',
    video: true,
    env: {
      testurlone: 'https://www.webdriveruniversity.com/',
      testurltwo: 'https://www.automationteststore.com/',
    },
  },
});
