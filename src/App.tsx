import React from 'react';
import './App.scss';
import { Box } from '@mui/material';
import bg_main from './assets/bg_main.png'
import { Title } from './components/navigation/Title/Title';
import { Navigation } from './components/navigation';

function App() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        backgroundImage: `url(${bg_main})`,
        backgroundSize: { xs: '100%', sm: 'cover', md: '100% auto', lg: 'cover' },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: { xs: 'top', md: 'center' },
        minHeight: '100vh',
      }}
    >
      <Navigation />
    </Box>
  );
}

export default App;
