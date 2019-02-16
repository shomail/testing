import { add } from './math';

//mock function
const sub = jest.fn(() => 2);

test('aub subtract numbers', () => {
  expect(sub(2, 1)).toBe(2);
  //these methods only be called on mock functions as they spy on it
  expect(sub).toHaveBeenCalledTimes(1);
  expect(sub).toHaveBeenCalledWith(2, 1);
});

//Unit test
//It only tests one thing

test('add numbers', () => {
  const result = add(2, 5);

  //this is an assertion
  expect(result).toBe(7);
});
