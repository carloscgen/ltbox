import * as React from 'react';
import { Box } from '@mui/material';
import { PopularSelect } from './PopularSelect/PopularSelect';

export const PopularSection = () => {
  return (
    <Box>
      <PopularSelect />
      {/* <PopularList /> */}
    </Box>
  );
}