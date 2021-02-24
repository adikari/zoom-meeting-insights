// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.js', '!src/plugins/**/*.js', '!**/node_modules/**'],
  setupFiles: ['<rootDir>/.jest/setEnvVar.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'text-summary', 'html'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  watchman: true,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
