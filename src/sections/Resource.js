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

const Resource = () => {
  return (
    <BoxWrapper>
      <Container maxWidth='md'>
        <Typography variant='h2' component='h2' color='white' sx={{ mb: 4 }}>
          Resource
        </Typography>
        <Typography variant='body4' component='p' color='white'>
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best
        </Typography>
      </Container>
    </BoxWrapper>
  );
};

export default Resource;
