import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import React from 'react';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '100px 0',
});

const Pov = () => {
  return (
    <BoxWrapper>
      <Container maxWidth='md'>
        <Typography variant='h2' component='h2' color='white' sx={{ mb: 4 }}>
          POV
        </Typography>
        <Typography variant='body4' component='p' color='white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Typography>
      </Container>
    </BoxWrapper>
  );
};

export default Pov;
