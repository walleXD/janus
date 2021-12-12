import { useState, useEffect, useCallback } from 'react'
import { Board, getNeighborCount, createBoadCreator } from './utils'
import Hashids from 'hashids'

export const useBoard = (
  verticalCount: number,
  horizontalCount: number
): Board => {
  const [firstRender, setFirstRender] = useState(false)
  const [rerender, setRerender] = useState(false)

  const [board, setBoard] = useState(
    createBoadCreator(new Hashids())(horizontalCount, verticalCount)
  )

  useEffect(() => {
    setFirstRender(true)
  }, [])

  useEffect(() => {
    if (firstRender && !rerender) {
      setTimeout(() => {
        setRerender(true)
      }, 500)
    } else {
      setRerender(false)
    }
  }, [firstRender, rerender])

  const createNextBoardState = useCallback(() => {
    const newBoard = board.map((row, y) =>
      row
        .map((cell, x) => [cell, getNeighborCount(board, x, y)] as const)
        .map(([cell, neighborCount]) => ({
          ...cell,
          alive: neighborCount === 3 || (cell.alive && neighborCount === 2)
        }))
    )

    setBoard(newBoard)
  }, [board])

  useEffect(() => {
    if (firstRender && board.length > 0 && rerender) {
      createNextBoardState()
    }
  }, [board, firstRender, createNextBoardState, rerender])

  return board
}
