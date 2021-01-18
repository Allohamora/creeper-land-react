/* it is a storybook config */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpackConfig = require('../webpack/webpack.config');
const { src } = require('../paths');

const scssRule = webpackConfig.module.rules.find(({ test }) => {
  const isRegex = test instanceof RegExp;

  if( !isRegex ) return false;
  return test.test('.scss');
});

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

    // replace storybook css rule to own
    config.module.rules[7] = scssRule;

    return config;
  }
}