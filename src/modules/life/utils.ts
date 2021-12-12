import Hashids from 'hashids'

export const generateRandomLifeState = (): boolean => Math.random() > 0.5

export interface Cell {
  id: string
  alive: boolean
}

export const createCell = (id: string): Cell => ({
  id,
  alive: generateRandomLifeState()
})

export type Board = Cell[][]

export const createBoadCreator =
  (hasher: Hashids) =>
    (horizontalCount: number, verticalCount: number): Board => {
      return Array(horizontalCount)
        .fill(0)
        .map((_, i) =>
          Array(verticalCount)
            .fill(0)
            .map((_, j) => {
              return createCell(hasher.encode(i, j))
            })
        )
    }

export const getVerticalNeighborCount = (
  board: Board,
  x: number,
  y: number,
  center = false
): number => {
  return (
    (y < board.length - 1 ? Number(board[y + 1][x].alive) : 0) +
    (y > 0 ? Number(board[y - 1][x].alive) : 0) +
    (center ? Number(board[y][x].alive) : 0)
  )
}

export const getNeighborCount = (
  board: Board,
  x: number,
  y: number
): number => {
  return (
    getVerticalNeighborCount(board, x, y) +
    (x > 0 ? getVerticalNeighborCount(board, x - 1, y, true) : 0) +
    (x < board[0].length - 1
      ? getVerticalNeighborCount(board, x + 1, y, true)
      : 0)
  )
}
