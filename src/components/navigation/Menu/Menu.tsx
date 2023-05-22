import { Box } from '@mui/material'
import React from 'react'
import menu from '../../../assets/menu.png'

export const Menu = () => {
  return (
    <Box
    sx={{
      mr: '41px'
    }}
    >
      <img src={menu} alt={'menu'}></img>
    </Box>
  )
}
