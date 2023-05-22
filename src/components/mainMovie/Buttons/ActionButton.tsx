import React from 'react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Plus from '../../../assets/plus.png';
import Play from '../../../assets/play.png';

interface IActionButtonText {
    text: string,
    showPlus: boolean
}

export const ActionButton = ({ text = '', showPlus }: IActionButtonText) => {
    return (
        <Button
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '0px',
                width: '248px',
                height: '56px',
                mr: 3,
            }}
            variant="outlined">
            <Box
                sx={{
                    display: 'flex'
                }}
            >
                <img src={showPlus ? Plus : Play} alt={'Icon button'}></img>
            </Box>
            <Typography
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '1',
                    letterSpacing: '4px',
                    ml: '12px'
                }}
            >
                {text.toUpperCase()}
            </Typography>
        </Button>
    )
}
