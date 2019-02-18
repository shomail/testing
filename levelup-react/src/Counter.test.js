import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  // Render the component
  const { debug, getByTestId } = render(<Counter />);
  debug(); // output dom as string in test run

  // Assert counter-btn is a button
  const counterBtn = getByTestId('counter-btn');
  expect(counterBtn.tagName).toBe('BUTTON');
  // Assert counter-btn starts at 0
  expect(counterBtn.textContent).toBe('0');
});
