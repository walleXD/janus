import { useBoard } from '@/life/hooks'
import React, { VFC } from 'react'
import GameBoard from './Board'
import GameCell from './Cell'

const BoardContainer: VFC = () => {
  const board = useBoard(10, 30)

  return (
    <GameBoard board={board}>
      {(cell) => <GameCell alive={cell.alive} />}
    </GameBoard>
  )
}

export default BoardContainer
