const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      useBaseUrl: 'https://petstore.swagger.io/v2/pet',
      findByStatusPendingUrl: 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending',
      getPetUrl: 'https://petstore.swagger.io/v2/pet/8979789078978969',
      createUserUrl:'https://petstore.swagger.io/v2/user/',
    },
    retries: 1,
    experimentalRunAllSpecs: true,
    viewportHeight: 900,
    viewportWidth: 1600,
  },
  reporter: 'junit',
  reporterOptions: {
    toConsole: true,
  },
});
