import React from 'react';
import { render, cleanup } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup); // cleanup the rendered DOM tree after test ran

test('<NewMovie />', () => {
  const { getByTestId, debug } = render(<NewMovie />);
  debug();
});
