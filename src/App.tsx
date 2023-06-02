import React from 'react';
import './App.scss';
import { Box } from '@mui/material';
import bg_main from './assets/bg_main.png'
import { Navigation } from './components/navigation';
import { MainMovie } from './components/mainMovie';
import { PopularMovies } from './components/popularMovies/popularButton';

//
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
        backgroundSize: { xs: 'cover', sm: 'cover', md: '100% auto', lg: 'cover' },
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
          // option 1
          pb: '162px',
        }}
      >
        <Navigation />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            // option 2
            // position: 'absolute',
            // bottom: '162px'
            // option 1
            // pt: '469px',
            // option 3
            // pt: 'calc(100vh - 477px)'
          }}
        >
          <MainMovie />
          <PopularMovies />
        </Box>


      </Box>
    </Box>
  );
}

export default App;
