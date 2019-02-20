import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Movie from './Movie';

afterEach(() => {
  cleanup();
  // we need to clear mock function because in second test we are testing if it's not called
  // but jest keep tracks of mocks and it will fail test because it was called previously
  console.error.mockClear();
});

console.error = jest.fn();

const movie = {
  id: 'movie id',
  title: 'Movie Title',
  poster_path: 'poster_img.jpg',
};

test('<Movie />', () => {
  // testing for error thrown if no props passed
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

test('<Movie /> with Movie prop', () => {
  // testing for error thrown if no props passed
  render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>,
  );
  expect(console.error).not.toBeCalled();
});
