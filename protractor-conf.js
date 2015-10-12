exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'src/**/*e2e.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'phantomjs.cli.args': [ '--ignore-ssl-errors=true', '--web-security=false' ]
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:9999/src',

  seleniumAddress: 'http://localhost:9999',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};