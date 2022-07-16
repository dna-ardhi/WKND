import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SemiOval from '../../public/assets/elm_oval.svg';
import React from 'react';
import Image from 'next/image';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100%',
  aspectRatio: '16 / 9',
  maxHeight: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  backgroundColor: '#EEBECE',
  position: 'relative',
});

const MascotWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
});

const TextBlue = styled('span')({
  color: '#0B24FB',
});

const Description = () => {
  return (
    <BoxWrapper id='description' sx={{ pt: 15, pb: 5 }}>
      <Container maxWidth='md' sx={{ zIndex: 10 }}>
        <Typography variant='body1' component='p' textAlign='end' mb={3}>
          <TextBlue>Definition;</TextBlue> a practice or exercise to test or
          improve one's fitness for athletic competition, ability, or
          performance to exhaust (something, such as a mine) by working to
          devise, arrange, or achieve by resolving difficulties.
          Merriam-Webster.com Dictionary.
        </Typography>
        <Typography
          variant='caption'
          component='p'
          textAlign='end'
          color='white'>
          -weekend team
        </Typography>
      </Container>
      <MascotWrapper>
        <Image
          src='/assets/mascot.png'
          width={170}
          height={170}
          objectFit='contain'
          style={{ transform: 'rotate(-90deg)', zIndex: 2 }}
        />
        <SemiOval
          style={{
            position: 'absolute',
            height: '500px',
            top: '0',
            right: '0',
          }}
        />
      </MascotWrapper>
    </BoxWrapper>
  );
};

export default Description;
