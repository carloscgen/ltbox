import React from 'react'
import { ActionButton } from './ActionButton'
import { Box } from '@mui/material'

export const Buttons = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                mt: 4,
            }}
        >
            <ActionButton text='reproducir' showPlus={false}/>
            <ActionButton text='mi lista' showPlus/>
        </Box>
    )
}
