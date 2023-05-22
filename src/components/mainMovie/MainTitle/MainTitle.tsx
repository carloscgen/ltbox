import { Typography } from '@mui/material'
import React from 'react';
import './styles.scss';

export const MainTitle = () => {
    return (
        <Typography
            sx={{
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '4px'
            }}
            className='main-title'>ORIGINAL DE <span>LITEFLIX</span></Typography>)
}
