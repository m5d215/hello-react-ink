import { Box, Color, render } from 'ink'
import React, { FC, useEffect, useState } from 'react'

const message = 'Hello World!'

const Main: FC = () => {
  const [length, setLength] = useState(0)

  useEffect(() => {
    if (length === message.length) {
      return
    }

    const id = setTimeout(() => {
      setLength(current => current + 1)
    }, 100)
    return () => clearTimeout(id)
  }, [length])

  return (
    <Box padding={1}>
      <Color>{message.substring(0, length)}</Color>
    </Box>
  )
}

render(<Main />)
