const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync('localhost')
  .ts('resources/ts/app.ts', 'public/js')
  .sass('resources/sass/app.scss', 'public/css', {
    sassOptions: {
      outputStyle: 'nested',
    },
    implementation: require('node-sass')
  })
  .extract(['vue', 'jquery']);

if (mix.inProduction()) {
  mix.version();
}