module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [ 'mocha', 'chai','sinon-chai'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'node_modules/sinon-chai/sinon.js',
      'src/**/*.js',
      'src/**/*.spec.js'
    ],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-mocha-reporter'
    ],
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true
  });
};