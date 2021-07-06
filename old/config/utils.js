const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

const isProduction = process.env.NODE_ENV === PRODUCTION;

module.exports = {
  PRODUCTION,
  DEVELOPMENT,
  isProduction,
};