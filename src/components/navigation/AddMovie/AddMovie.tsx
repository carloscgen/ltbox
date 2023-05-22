import React from 'react'
import { Box, Typography } from '@mui/material'
import Plus from '../../../assets/plus.png';

export const AddMovie = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        ml: 8
      }}>
      <Box>
        <img src={Plus} alt={'Plus'}></img>
      </Box>
      <Typography
        sx={{
          ml: '12px',
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '18px',
          letterSpacing: '4px',
        }}
      >{'agregar película'.toUpperCase()}</Typography>
    </Box>
  )
}
