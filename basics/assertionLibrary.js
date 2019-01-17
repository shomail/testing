const { sum, subtract } = require('./math');

let result, expected;

console.log('Testing math.js functions');

result = sum(3, 7);
expected = 10;

expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;

expect(result).toBe(expected);

//creation assertion library, anabstraction to make assertions easeir, same as jest framework
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {}
  };
}
