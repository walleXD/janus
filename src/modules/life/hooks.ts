import { useState } from 'react'
import { Board } from './utils'
import { createBoadCreator } from '@/life/utils'
import Hashids from 'hashids'

export const useBoard = (
  verticalCount: number,
  horizontalCount: number
): Board => {
  const [board] = useState(
    createBoadCreator(new Hashids())(horizontalCount, verticalCount)
  )

  return board
}
