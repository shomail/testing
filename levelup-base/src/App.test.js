import { add } from './App';

//Unit test
//It only tests one thing

test('add numbers', () => {
  const result = add(2, 5);

  //this is an assertion
  expect(result).toBe(7);
});
