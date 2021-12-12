import React, { VFC, useMemo } from 'react'
import { Text } from 'ink'

export interface GameCellProps {
  alive?: boolean
}

const GameCell: VFC<GameCellProps> = ({ alive }) => {
  const isAlive = useMemo(() => alive !== undefined && alive, [alive])

  return <Text>{isAlive ? '🦠' : '💀'}</Text>
}

export default GameCell
