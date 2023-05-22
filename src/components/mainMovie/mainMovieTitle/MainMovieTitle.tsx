import { Typography } from '@mui/material'
import React from 'react'

interface IMainMovieTitle {
    mainMovieTitle?: string, 
}

export const MainMovieTitle = ({ mainMovieTitle = 'la casa de papel' } : IMainMovieTitle) => {
    return (
        <Typography
            sx={{
                fontWeight: 700,
                fontSize: '120px',
                lineHeight: '100px',
                letterSpacing: '16px',
                color: '#64EEBC',
                mt: 3,
            }}
            className='main-movie-title'>{mainMovieTitle.toUpperCase()}</Typography>
    )
}
