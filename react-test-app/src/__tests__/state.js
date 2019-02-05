import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {FavoriteNumber} from '../favourite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, debug} = render(<FavoriteNumber />)
  debug()
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, {target: {value: 10}})
  debug()
})
