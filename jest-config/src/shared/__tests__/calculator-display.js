import React from 'react'
import {render} from 'react-testing-library'
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../../themes'
import CalculatorDisplay from '../calculator-display'

test('mounts', () => {
  const {container} = render(
    <ThemeProvider theme={dark}>
      <CalculatorDisplay value="0" />
    </ThemeProvider>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
