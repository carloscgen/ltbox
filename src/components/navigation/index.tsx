import React from 'react'
import { Title } from './Title/Title'
import { AddMovie } from './AddMovie/AddMovie'
import { Box } from '@mui/material'
import { Menu } from './Menu/Menu';
import { Notification } from './Notification/Notification';
import { Profile } from './Profile/Profile'

export const Navigation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // mt: '35px',
        // ml: '104px',
        // mr: '104px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Title />
        <AddMovie />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Menu />
        <Notification />
        <Profile />
      </Box>
    </Box>
  )
}
