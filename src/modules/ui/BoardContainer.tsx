import { useBoard } from '../life/hooks'
import React, { VFC } from 'react'
import GameBoard from './Board'
import GameCell from './Cell'

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
