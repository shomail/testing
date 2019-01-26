module.exports = {
  //   testEnvironment: 'jest-environment-node',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  //two methods to load files:
  //before jest is loaded
  //   setupFiles: [],
  //after jest is loaded
  setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),
}
