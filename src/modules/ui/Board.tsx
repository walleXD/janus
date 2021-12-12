import React, { FC } from 'react'
import { Box } from 'ink'

import { Board, Cell } from '../life/utils'

export interface BoardProps {
  board: Board
  children: (cell: Cell) => React.ReactNode
}

const GameBoard: FC<BoardProps> = ({ board, children }) => {
  return (
    <Box>
      {board.map((row, i) => {
        return (
          <Box key={i} flexDirection="row" marginBottom={2}>
            <Box flexDirection="column">
              {row.map((cell, j) => {
                return <Box key={cell.id}>{children(cell)}</Box>
              })}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default GameBoard
