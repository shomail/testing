import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup); // cleanup the rendered DOM tree after test ran

test('<NewMovie />', () => {
  // r-t-l defaults to full on render of the component tree
  // in r-t-l you don't do shallow renders
  // because our users don't care about it so do we
  // instead enzyme recommends shallow render of comp
  // here in this case MovieForm comp also gets rendered

  const {
 getByTestId, debug, queryByTestId, container, getByText 
} = render(<NewMovie />);
  expect(getByTestId('page-title').textContent).toBe('Enter New Movie');
  expect(queryByTestId('movie-form')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();

  fireEvent.click(getByText('Save'));
});
