module.exports = {
  ...require('./jest-common'),
  displayName: 'CLIENT',
  testEnvironment: 'jest-environment-jsdom',
  setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
}
