import { Box, Fab, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/future/image';
import React, { useContext } from 'react';
import WeekendContext from '../context';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100%',
  aspectRatio: '16 / 9',
  maxHeight: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("/assets/BG_1.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#EEBECE',
  backgroundPositionX: 'center',
  paddingBottom: '5rem',
});

const Hero = () => {
  const handleGo = () => {
    document
      .getElementById('description')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <BoxWrapper>
      <Typography variant='h1' components='h1' color='white' textAlign='center'>
        WEEKEND FROM HOME
      </Typography>
      <Typography
        variant='subtitle1'
        components='p'
        color='white'
        textAlign='center'>
        Stay active with a little workout
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: 300,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Image
          src='/assets/mascot.png'
          width={184}
          height={305}
          style={{
            position: 'static',
            objectFit: 'contain',
          }}
        />
        <Fab
          variant='extended'
          sx={{
            width: 232,
            position: 'absolute',
            bottom: '22%',
          }}
          onClick={handleGo}>
          Let's Go!
        </Fab>
      </Box>
    </BoxWrapper>
  );
};

export default Hero;
