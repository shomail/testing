// sum is intentionally broken so we can see errors in the tests

const sum = (a, b) => a - b;

const subtract = (a, b) => a - b;

// these are just to simulate an async function

const sumAsync = (...args) => Promise.resolve(sum(...args));

const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = {
  sum,
  subtract,
  sumAsync,
  subtractAsync
};
