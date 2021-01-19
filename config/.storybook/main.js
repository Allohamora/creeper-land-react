/* it is a storybook config */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpackConfig = require('../webpack/webpack.config');
const { src } = require('../paths');

const findRule = (ext) => webpackConfig.module.rules.find(({ test }) => {
  const isRegex = test instanceof RegExp;

  if( !isRegex ) return false;
  return test.test(ext);
});

const scssRule = findRule('.scss');
const svgRule = findRule('.svg');


module.exports = {
  stories: [
    `${src}/**/*.stories.mdx`,
    `${src}/**/*.stories.@(js|jsx|ts|tsx)`
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    // adds baseUrl feature to storybook
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    // replace storybook svg rule
    config.module.rules[8].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
    config.module.rules.push(svgRule);

    // replace storybook css rule to own
    config.module.rules[7] = scssRule;

    return config;
  }
}