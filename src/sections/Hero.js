import { Box, Fab, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/future/image';
import React from 'react';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  maxHeight: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#EEBECE',
  paddingBottom: '5rem',
  position: 'relative',
  overflowX: 'hidden',
});

const Background = styled('div')({
  width: '100%',
  height: '100%',
  minWidth: '1500px',
  maxWidth: '2500px',
  backgroundImage: 'url("/assets/BG_1.png")',
  backgroundSize: 'cover',
  backgroundPositionX: 'center',
  backgroundPositionY: 'bottom',
  position: 'absolute',
});

const TextWrapper = styled(Box)({
  zIndex: 3,
});

const Hero = () => {
  const handleGo = () => {
    document
      .getElementById('description')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <BoxWrapper>
      <Background />
      <TextWrapper mb={7}>
        <Typography
          variant='h1'
          components='h1'
          color='white'
          textAlign='center'>
          WEEKEND FROM HOME
        </Typography>
        <Typography
          variant='subtitle1'
          components='p'
          color='white'
          textAlign='center'>
          Stay active with a little workout
        </Typography>
      </TextWrapper>

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
