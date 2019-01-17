//test runner
function test(title, callback) {
  try {
    callback();
    console.log(`✔︎ ${title}`);
  } catch (error) {
    console.error(`✘ ${title}`);
    console.log(error);
  }
}

async function asyncTest(title, callback) {
  try {
    await callback();
    console.log(`✔︎ ${title}`);
  } catch (error) {
    console.error(`✘ ${title}`);
    console.log(error);
  }
}

module.exports = {
  test,
  asyncTest
};
