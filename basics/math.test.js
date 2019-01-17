const { test, asyncTest } = require('./testingFramework');
const { expect } = require('./assertionLibrary');
const { sum, subtract, sumAsync, subtractAsync } = require('./math');

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

asyncTest('sumAsync adds numbers async', async () => {
  const result = await sumAsync(4, 10);
  const expected = 14;
  expect(result).toBe(expected);
});

asyncTest('subtractAsync subtracts numbers async', async () => {
  const result = await subtractAsync(10, 4);
  const expected = 6;
  expect(result).toBe(expected);
});
