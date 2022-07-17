import { Card, CardContent, Fab, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Navigation } from 'swiper';

const CardSwiperWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const NavButton = styled(Fab)(({ theme }) => ({
  backgroundColor: 'white',
  width: 36,
  height: 36,
  padding: '24px',
  margin: '16px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const CardSwiper = ({ data }) => {
  const [disableBtn, setDisableBtn] = useState('prev');
  return (
    <CardSwiperWrapper>
      <NavButton
        aria-label='back'
        className='prev-card-btn'
        disabled={disableBtn === 'prev'}>
        <ArrowBackIcon />
      </NavButton>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView='auto'
        className='card-swiper'
        navigation={{ nextEl: '.next-card-btn', prevEl: '.prev-card-btn' }}
        onSlideChange={(e) =>
          e.activeIndex === 0 ? setDisableBtn('prev') : setDisableBtn(null)
        }
        onReachBeginning={() => setDisableBtn('prev')}
        onReachEnd={() => setDisableBtn('next')}>
        {(data ? data : Array.from(new Array(3))).map((item, idx) => (
          <SwiperSlide key={item?.id || idx} style={{ width: 'fit-content' }}>
            <Card sx={{ height: '220px', width: '300px' }}>
              <CardContent>
                {data ? (
                  <Typography color='black' variant='h3' mb={3}>
                    {item.by}
                  </Typography>
                ) : (
                  <Skeleton variant='text' height={70} />
                )}
                {data ? (
                  <Typography variant='subtitle4' component='p'>
                    {item.testimony}
                  </Typography>
                ) : (
                  <>
                    <Skeleton variant='text' />
                    <Skeleton variant='text' />
                    <Skeleton variant='text' />
                  </>
                )}
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavButton
        aria-label='next'
        className='next-card-btn'
        disabled={disableBtn === 'next'}>
        <ArrowForwardIcon />
      </NavButton>
    </CardSwiperWrapper>
  );
};

export default CardSwiper;
