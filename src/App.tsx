import React, { VFC } from 'react'
import { useInput, useApp, Text, Static } from 'ink'
import BoardContainer from './modules/ui/BoardContainer'
import HandleInputs from './modules/ui/HandleInputs'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'

const App: VFC = () => {
  const { exit } = useApp()

  useInput((input) => {
    if (input === 'q') {
      exit()
    }
  })

  return (
    <>
      <Static items={[1]}>
        {(_, i) => (
          <Gradient name="rainbow" key={i}>
            <BigText text="Janus" />
            <Text>A game of life</Text>
          </Gradient>
        )}
      </Static>

      <HandleInputs>{(props) => <BoardContainer {...props} />}</HandleInputs>
    </>
  )
}

export default App
