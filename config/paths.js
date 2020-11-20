const path = require('path');

const ROOT_PATH = path.join(__dirname, '../');

const build = path.join(ROOT_PATH, 'build');
const src = path.join(ROOT_PATH, 'src');
const public = path.join(ROOT_PATH, 'public');
const nodeModules = path.join(ROOT_PATH, 'node_modules');
const config = __dirname;

const tsconfig = path.join(ROOT_PATH, 'tsconfig.json');
const package = path.join(ROOT_PATH, 'package.json');
const postcss = path.join(config, 'postcss.config.js');

module.exports = {
  src,
  build,
  public,
  nodeModules,
  config,

  tsconfig,
  postcss,
  package
};
