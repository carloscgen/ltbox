import React from 'react'
import { Box } from '@mui/material'
import { MainTitle } from './MainTitle/MainTitle'
import { MainMovieTitle } from './mainMovieTitle/MainMovieTitle'
import { Buttons } from './Buttons/Buttons'

export const MainMovie = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: 'calc(100vh - 477px)'
            }}
        >
            <MainTitle />
            <MainMovieTitle />
            <Buttons />
        </Box>
    )
}
