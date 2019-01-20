//creation assertion library, anabstraction to make assertions easeir, same as jest framework
//here the problem is that the error will be thrown at line where it is written and we don't get the stact trace where the actual error happen and alos it will stop execution of the other tests, thats why we need to create a test runner
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(
          `${actual} is not equal to ${expected}`,
        )
      }
    },
  }
}

// global.expect = expect;
module.exports = {
  expect,
}
