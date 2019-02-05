import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {FavoriteNumber} from '../favourite-number'

test('entering an invalid value shows an error message and rerender props to remove it', () => {
  const {getByLabelText, getByTestId, queryByTestId, rerender} = render(
    <FavoriteNumber />,
  )
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, {target: {value: 10}})
  expect(getByTestId('error-message')).toHaveTextContent(
    /the number is invalid/i,
  )
  rerender(<FavoriteNumber max={10} />)
  //getBy throws error if the element is not found
  //thats why we used queryBy to check for null
  expect(queryByTestId('error-message')).toBeNull()
})
