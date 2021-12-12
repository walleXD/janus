import React, { VFC } from 'react'

import GameBoard from '../components/Board'
import GameCell from '../components/Cell'
import { useBoard } from '../hooks'

export interface BoardContainerProps {
  rows: number
  columns: number
}

const BoardContainer: VFC<BoardContainerProps> = ({ rows, columns }) => {
  const board = useBoard(rows, columns)

  return (
    <GameBoard board={board}>
      {(cell) => <GameCell alive={cell.alive} />}
    </GameBoard>
  )
}

export default BoardContainer
