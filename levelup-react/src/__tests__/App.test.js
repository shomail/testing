import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<App />', () => {
  const { debug } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  debug();
});
