/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'jquery/dist/**/*.+(js|min.map)',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      'rangeslider.js/dist/**+(js|css)',
      '@angular/**/*.js',
      'watermarkjs/dist/**/*.+(js|min.map)'
    ]
  });
};
