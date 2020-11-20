const { src } = require('./paths');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', src],
  rootDir: src,
  setupFiles: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  }
};