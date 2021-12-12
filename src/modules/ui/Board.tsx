import React, { FC } from 'react'
import { Box } from 'ink'

import Cell from './Cell'

export interface BoardProps {
  horizontalCount: number
  verticalCount: number
}

const Board: FC<BoardProps> = ({ verticalCount, horizontalCount }) => {
  return (
    <Box>
      {Array(horizontalCount)
        .fill(0)
        .map((_, i) => {
          return (
            <Box key={i} flexDirection="row" marginBottom={2}>
              <Box flexDirection="column">
                {Array(verticalCount)
                  .fill(0)
                  .map((_, j) => {
                    return <Cell key={j} alive={Math.random() < 0.5} />
                  })}
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

Board.defaultProps = {
  verticalCount: 15,
  horizontalCount: 35
}

export default Board
