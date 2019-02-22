import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MoviesList from './MoviesList';

global.fetch = require('jest-fetch-mock');

afterEach(() => cleanup);

const movies = [
  {
    id: 'movie 1',
    title: 'movie title 1',
  },
  {
    id: 'movie 2',
    title: 'movie title 2',
  },
];

test('<MoviesList />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { debug } = render(<MoviesList />);
  debug();
});
