import { Box } from '@mui/material'
import React from 'react'
import bell from '../../../assets/bell.png'

export const Notification = () => {
    return (
        <Box
            sx={{
                mr: '41px'
            }}
        >
            <img src={bell} alt={'bell'}></img>
        </Box>
    )
}
