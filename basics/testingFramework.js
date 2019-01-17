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

module.exports = {
  test
};
