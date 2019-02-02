module.exports = {
  ...require('./jest-common'),
  displayName: 'SERVER',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server_tests__/**/*.js'],
}
