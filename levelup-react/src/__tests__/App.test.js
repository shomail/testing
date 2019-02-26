import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

global.fetch = require('jest-fetch-mock');

const movies = {
  success: true,
  results: [
    {
      id: 123,
      title: 'movie title 1',
      poster_path: 'poster1.jpg'
    },
    {
      id: 124,
      title: 'movie title 2',
      poster_path: 'poster2.jpg'
    }
  ]
};

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<App />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  await waitForElement(() => getByTestId('movie-link'));
  debug();
});
