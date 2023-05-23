import * as React from 'react';
import { Box } from '@mui/material';
import { PopularSelect } from './PopularSelect/PopularSelect';

export const PopularMovies = () => {
  return (
    <Box
      sx={{
        width: '220px',
        marginTop: '59px',
      }}
    >
      <PopularSelect />
      {/* <PopularList /> */}
    </Box>
  );
}