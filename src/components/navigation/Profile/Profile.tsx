import { Box } from '@mui/material'
import React from 'react'
import profile from '../../../assets/profile.png'

export const Profile = () => {
  return (
    <Box>
      <img src={profile} alt={'profile'}></img>
    </Box>
  )
}
