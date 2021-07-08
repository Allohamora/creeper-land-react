const tsconfig = require('./tsconfig.json');

const { baseUrl } = tsconfig.compilerOptions;

module.exports = {
  testEnvironment: 'jsdom',
  rootDir: baseUrl,
  moduleDirectories: ['node_modules', baseUrl],
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)"
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/__tests__/setupTests.ts']
};