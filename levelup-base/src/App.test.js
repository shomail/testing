import { total } from './App';
import { add } from './math';

//module mocking
jest.mock('./math', () => ({
  add: jest.fn(() => 25)
}));

//after module mocking it's an unit test instead of integration test

//Integration test
//total relies on add function
//if add breaks total will break too
test('total adds up', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1);

  //Redundant, not to be done in real world code
  add.mockImplementation(() => 30);

  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2);
});
