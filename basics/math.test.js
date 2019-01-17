const { test } = require('./testingFramework');
const { expect } = require('./assertionLibrary');
const { sum, subtract } = require('./math');

console.log('Testing math.js functions');

test('Sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
