import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  // render the component
  const { debug, getByTestId } = render(<Counter />);
  debug(); // output dom as string in test run

  // Assert that we get the right element
  expect(getByTestId('counter-btn').tagName).toBe('BUTTON');
  expect(getByTestId('counter-btn').textContent).toBe('0');
});
