import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import Circle from '../../public/assets/circle.svg';
import React, { useContext } from 'react';
import CardSwiper from '../components/CardSwiper';
import WeekendContext from '../context';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '460px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const BoxPink = styled('div')({
  width: '100%',
  height: '50%',
  backgroundColor: '#EEBECE',
});

const BoxBlack = styled('div')({
  width: '100%',
  height: '50%',
  backgroundColor: 'black',
});

const Testimony = () => {
  const { loading, data } = useContext(WeekendContext);
  return (
    <BoxWrapper>
      <BoxPink>
        <Container sx={{ position: 'relative' }}>
          <Circle style={{ position: 'absolute', top: '0', left: 80 }} />
          <Typography
            variant='h2'
            component='h2'
            color='white'
            sx={{ position: 'relative', pt: 7 }}>
            Testimonial
          </Typography>
        </Container>
      </BoxPink>
      <Container sx={{ position: 'absolute', bottom: 100 }}>
        <CardSwiper data={data.testimony} />
      </Container>
      <BoxBlack></BoxBlack>
    </BoxWrapper>
  );
};

export default Testimony;
