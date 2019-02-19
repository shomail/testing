import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup); // cleanup the rendered DOM tree after test ran

const onSubmit = jest.fn();

test('<MovieForm />', () => {
  const { queryByTestId, getByText } = render(<MovieForm submitForm={onSubmit} />);
  expect(queryByTestId('movie-form')).toBeTruthy();

  fireEvent.click(getByText('Save'));

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
