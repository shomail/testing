import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Movie from './Movie';

afterEach(cleanup);

test('<Movie />', () => {
  render(<Movie />);
});
