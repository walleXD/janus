import { IO } from 'fp-ts/lib/IO'
import Hashids from 'hashids'

export const generateRandomLifeState: IO<boolean> = () => Math.random() > 0.5

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
