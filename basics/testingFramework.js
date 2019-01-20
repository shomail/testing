const { expect } = require('./assertionLibrary')

//test runner
async function test(title, callback) {
  try {
    await callback()
    console.log(`✔︎ ${title}`)
  } catch (error) {
    console.error(`✘ ${title}`)
    console.log(error)
  }
}

async function asyncTest(title, callback) {
  try {
    await callback()
    console.log(`✔︎ ${title}`)
  } catch (error) {
    console.error(`✘ ${title}`)
    console.log(error)
  }
}

global.test = test
global.expect = expect
global.asyncTest = asyncTest
// module.exports = {
//   test,
//   asyncTest
// };
