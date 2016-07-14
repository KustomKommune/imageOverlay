/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
  '@angular2-material': 'vendor/@angular2-material/',
  'jquery': 'vendor/jquery/dist/',
  'watermarkjs': 'vendor/watermarkjs/dist/',
  'rangesliderjs': 'vendor/rangeslider.js/dist/'
};

/** User packages configuration. */
const packages:any = {
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
const barrels: string[] = [
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
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    //'watermarkjs': 'vendor/watermarkjs',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
