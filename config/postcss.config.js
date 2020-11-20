const { package } = require('./paths');
const { browserslist } = require(package);
const { isProduction } = require('./utils');

const postCssPresetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');
const pxToRem = require('postcss-pxtorem');

const plugins = [
  postCssPresetEnv({ browsers: browserslist }),
  pxToRem({
    rootValue: 10,
    replace: true
  })
];

if( isProduction ) {
  plugins.push(
    cssNano(),
  )
};

module.exports = {  
  plugins,
};
