const thumbWar = require('../thumbWar')
const utils = require('../utils')

test('returns winner', () => {
  //instead of manually copying the fn and then cleaning up we can use jest.spyOn utility
  //   const originalGetWinner = utils.getWinner
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)
  //jest fn keeps track of args and number of times func called
  //   utils.getWinner = jest.fn((p1, p2) => p1)

  //our test is not looking for number of arguments, if we only have one argument in function definitaion,
  //test will still pass because it's an implementaiotn error
  const winner = thumbWar('shomail', 'tahir')

  expect(winner).toBe('shomail')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('shomail', 'tahir')
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'shomail', 'tahir')
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'shomail', 'tahir')
  expect(utils.getWinner.mock.calls).toEqual([['shomail', 'tahir'], ['shomail', 'tahir']])

  //cleanup
  //   utils.getWinner = originalGetWinner
  utils.getWinner.mockRestore()
})
