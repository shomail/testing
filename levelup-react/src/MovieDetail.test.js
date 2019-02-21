import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'movie id',
  },
};

console.error = jest.fn();

test('<MovieDetail />', async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      id: 'movie id',
      title: 'movie title',
    }),
  );
  const { debug, getByText } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByText('movie title'));
  debug();
});
