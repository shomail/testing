import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MoviesList from './MoviesList';

global.fetch = require('jest-fetch-mock');

afterEach(() => cleanup);

const movies = {
  results: [
    {
      id: 'movie 1',
      title: 'movie title 1',
      poster_path: 'poster1.jpg',
    },
    {
      id: 'movie 2',
      title: 'movie title 2',
      poster_path: 'poster2.jpg',
    },
  ],
};

test('<MoviesList />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>,
  );
  await waitForElement(() => getByTestId('movie-link'));
  debug();
});
