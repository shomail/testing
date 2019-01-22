const thumbWar = require('../thumbWar')
const utils = require('../utils')

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  }
})

test('return winner using module', () => {
  const winner = thumbWar('shomail', 'tahir')
  expect(winner).toBe('shomail')
  expect(utils.getWinner.mock.calls).toEqual([['shomail', 'tahir'], ['shomail', 'tahir']])

  //cleanup
  utils.getWinner.mockReset()
})
