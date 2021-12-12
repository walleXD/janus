import React, { VFC } from 'react'
import { useInput, useApp, Text, Static, Box } from 'ink'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'

import BoardContainer from './modules/life/containers/BoardContainer'
import HandleInputs from './modules/life/containers/HandleInputs'

const App: VFC = () => {
  const { exit } = useApp()

  // TODO: Add a cleaner exit method
  useInput((input) => {
    if (input === 'q') {
      setTimeout(() => {
        exit()
      }, 5000)
    }
  })

  return (
    <>
      <Static items={[1]}>
        {(_, i) => (
          <Gradient name="cristal" key={i}>
            <BigText text="Janus" />
            <Text>A game of life</Text>
          </Gradient>
        )}
      </Static>

      <Box marginTop={2}>
        <HandleInputs>{(props) => <BoardContainer {...props} />}</HandleInputs>
      </Box>
    </>
  )
}

export default App
