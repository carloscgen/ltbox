import React from 'react';
import { Box, FormControl, ListSubheader, MenuItem, Select, Typography } from '@mui/material';
import './styles.scss';
import arrow from '../../../../assets/arrow.png'

export const PopularSelect = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    color: '#fff',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '18px',
                    textAlign: 'center',
                    letterSpacing: '4px',
                }}
            >
                {'VER: '}
            </Typography>
            <FormControl sx={{ m: 1, width: { xs: '375px', sm: '375px', md: '241px', lg: '241px', xl: '241px' } }}>
                <Select
                    value={''}
                    onChange={() => { }}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem
                        sx={{
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '18px',
                            textAlign: 'center',
                            letterSpacing: '4px',
                            width: { xs: '2375px', sm: '2375px', md: '241px', xl: '241px', lg: '241px' },
                        }}
                        value="">
                        <em style={{ fontStyle: 'normal', letterSpacing: '4px', marginRight: '11px' }}>Populares</em>
                        <img src={arrow} alt={'Icon button'}></img>
                    </MenuItem>
                    <ListSubheader
                        sx={{
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '16px',
                            paddingTop: '16px',
                            letterSpacing: '4px',
                        }}
                    >Category 1</ListSubheader>
                    <ListSubheader
                        sx={{
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '16px',
                            paddingTop: '16px',
                            letterSpacing: '4px',
                        }}
                    >Category 1</ListSubheader>
                    <ListSubheader
                        sx={{
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '16px',
                            paddingTop: '16px',
                            letterSpacing: '4px',
                        }}
                    >Category 1</ListSubheader>
                </Select>
            </FormControl>
        </Box>
    )
}
