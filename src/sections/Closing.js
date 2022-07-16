import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import React from 'react';
import Shape2 from '../../public/assets/shape2.svg';
import Image from 'next/future/image';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
});

const Closing = () => {
  return (
    <BoxWrapper sx={{ pb: { xs: 60, md: 50, lg: 40, xl: 30 }, pt: 10 }}>
      <Container maxWidth='md' sx={{ zIndex: 5 }}>
        <Typography variant='h2' component='h2' color='white' sx={{ mb: 4 }}>
          You're all set
        </Typography>
        <Typography variant='body4' component='p' color='white'>
          The wise man therefore always holds in these matters to this principle
          of selection.
        </Typography>
      </Container>
      <Shape2 style={{ position: 'absolute', bottom: '0', left: '0' }} />
      <Image
        src='/assets/mascot.png'
        width={200}
        height={300}
        style={{
          transform: 'rotate(180deg)',
          position: 'absolute',
          left: '24px',
          bottom: '100px',
        }}
      />
    </BoxWrapper>
  );
};

export default Closing;
