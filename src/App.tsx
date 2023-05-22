import React from 'react';
import './App.scss';
import { Box } from '@mui/material';
import bg_main from './assets/bg_main.png'
import { Navigation } from './components/navigation';
import { MainMovie } from './components/mainMovie';

// BASE URL
// https://image.tmdb.org/t/p/w1280

// PATH
// /nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg

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
        width: '100%',
        position: 'absolute'
      }}
    >
      <Box
        sx={{
          pt: '35px',
          pl: '104px',
          pr: '104px',
          pb: '162px',
        }}
      >
        <Navigation />
        <Box
          sx={{
            pt: '469px',
          }}
        >
          <MainMovie />
          {/* <PopularMovies /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
