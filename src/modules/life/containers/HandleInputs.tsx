import { Box, Text } from 'ink'
import TextInput from 'ink-text-input'
import React, { ReactNode, FC, useCallback, useState } from 'react'

export interface RenderPropInput {
  rows: number
  columns: number
}

export interface HandleInputsProps {
  children: (props: RenderPropInput) => ReactNode
}

const HandleInputs: FC<HandleInputsProps> = ({ children }) => {
  const [rows, setRows] = useState('')
  const [rowValSubmitted, setRowValSubmitted] = useState(false)
  const [columns, setColumns] = useState('')
  const [columnValSubmitted, setColumnValSubmitted] = useState(false)

  const handleRowValSubmission = useCallback(() => {
    setRowValSubmitted(true)
  }, [setRowValSubmitted])

  const handleColValSubmission = useCallback(() => {
    setColumnValSubmitted(true)
  }, [setColumnValSubmitted])

  if (!rowValSubmitted) {
    return (
      <Box>
        <Box marginRight={1}>
          <Text>Enter total rows for game:</Text>
        </Box>

        <TextInput
          value={rows}
          onSubmit={handleRowValSubmission}
          showCursor
          onChange={setRows}
        />
      </Box>
    )
  }

  if (!columnValSubmitted) {
    return (
      <Box>
        <Box marginRight={1}>
          <Text>Enter total columns for game:</Text>
        </Box>

        <TextInput
          onSubmit={handleColValSubmission}
          value={columns}
          showCursor
          onChange={setColumns}
        />
      </Box>
    )
  }

  return <>{children({ rows: Number(rows), columns: Number(columns) })}</>
}

export default HandleInputs
