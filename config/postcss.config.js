const { package } = require('./paths');
const { browserslist } = require(package);
const { isProduction } = require('./utils');

const postCssPresetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');

const plugins = [
  postCssPresetEnv({ browsers: browserslist })
];

if( isProduction ) {
  plugins.push(
    cssNano(),
  )
};

module.exports = {  
  plugins,
};
