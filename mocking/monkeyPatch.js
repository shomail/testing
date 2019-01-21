const assert = require('assert')
const thumbWar = require('./thumbWar')
const utils = require('./utils')

const originalWinner = utils.getWinner

//here we are doing monkey patching, overiding the implementaion to make it predictable
utils.getWinner = (p1, p2) => {
  p2.toUpperCase()
  return p1
}

const winner = thumbWar('shomail', 'tahir')

assert.strictEqual(winner, 'shomail')

//it's a good idea to clean up after mocking or monkey patching
utils.getWinner = originalWinner
