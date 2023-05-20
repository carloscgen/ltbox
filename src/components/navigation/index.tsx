import React from 'react'
import { Title } from './Title/Title'
import { AddMovie } from './AddMovie/AddMovie'
import { Box } from '@mui/material'

export const Navigation = () => {
  return (
    <Box
    sx={{
        display: 'flex'
    }}
    >
        <Title />
        <AddMovie />
    </Box>
  )
}
