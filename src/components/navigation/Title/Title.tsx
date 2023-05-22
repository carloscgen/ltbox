import React from 'react'
import { Typography } from '@mui/material'
import './styles.scss';

export const Title = () => {
  return (
    <Typography 
    sx={{
      fontWeight: 700,
      fontSize: '34px',
      lineHeight: '34px',
      letterSpacing: '4px'
    }}
    className='title'>LITE<span>FLIX</span></Typography>
  )
}
