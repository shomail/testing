import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup);

test('<Counter />', () => {
  // Render the component
  const { debug, getByTestId } = render(<Counter />);
  //   debug(); // output dom as string in test run

  // Assert counter-btn is a button
  const counterBtn = getByTestId('counter-btn');
  expect(counterBtn.tagName).toBe('BUTTON');
  // Assert counter-btn starts at 0
  expect(counterBtn.textContent).toBe('0');

  // Assert counter-btn increments
  fireEvent.click(counterBtn);
  expect(counterBtn.textContent).toBe('1');

  fireEvent.click(counterBtn);
  expect(counterBtn.textContent).toBe('2');
});
