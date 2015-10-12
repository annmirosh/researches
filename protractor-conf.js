exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'src/**/*e2e.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'phantomjs.cli.args': [ '--ignore-ssl-errors=true', '--web-security=false' ]
  },

  seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

  chromeOnly: true,

  baseUrl: 'http://localhost:9999/src',
  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

if (process.env.TRAVIS) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER
  };
}