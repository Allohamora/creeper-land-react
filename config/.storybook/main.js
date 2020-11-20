/* it is a storybook config */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { src } = require('../paths');

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

    return config;
  }
}