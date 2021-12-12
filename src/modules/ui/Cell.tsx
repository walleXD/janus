import React, { VFC, useMemo } from 'react'
import { Text } from 'ink'

export interface CellProps {
  alive?: boolean
}

const Cell: VFC<CellProps> = ({ alive }) => {
  const isAlive = useMemo(() => alive !== undefined && alive, [alive])

  return <Text>{isAlive ? '🦠' : '💀'}</Text>
}

export default Cell
