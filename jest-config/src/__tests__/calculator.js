import React from 'react'
import {render} from 'react-testing-library'
import loadable from 'react-loadable'
import Calculator from '../calculator'

test('calculator renders', async () => {
  await loadable.preloadAll()
  // const {container, debug} = render(<Calculator />)
  // debug(container)
  render(<Calculator />)
})
