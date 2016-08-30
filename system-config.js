/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material/',
    'jquery': 'vendor/jquery/dist/',
    'watermarkjs': 'vendor/watermarkjs/dist/',
    'rangesliderjs': 'vendor/rangeslider.js/dist/'
};
/** User packages configuration. */
var packages = {
    'jquery': {
        main: 'jquery.min',
        format: 'global',
        defaultExtension: 'js'
    },
    'watermarkjs': {
        main: 'watermark.min',
        format: 'global',
        defaultExtension: 'js'
    },
    'rangesliderjs': {
        main: 'rangeslider.min.js',
        format: 'global',
        defaultExtension: 'js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    //'watermarkjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/image-placement',
    'app/range-slider',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=../system-config.js.map