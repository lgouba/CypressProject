const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://re7.r-smart.com/v2/#",
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },


  },
  
  projectId: "5zxfuo"

});
