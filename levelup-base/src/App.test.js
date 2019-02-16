import { add, total } from './App';

//Unit test
//It only tests one thing

test('add numbers', () => {
  const result = add(2, 5);

  //this is an assertion
  expect(result).toBe(7);
});

//Integration test
//total relies on add function
//if add breaks total will break too
test('total adds up', () => {
  expect(total(5, 20)).toBe('$25');
});
