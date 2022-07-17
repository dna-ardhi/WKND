import {
  AppBar,
  Box,
  Container,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React, { useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import WeekendContext from '../context';

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const TopBar = ({ ...props }) => {
  const { greeting } = useContext(WeekendContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <HideOnScroll {...props}>
      <AppBar sx={{ bgcolor: 'white', color: 'black' }}>
        <Container>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
              <Box
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={scrollToTop}>
                <Image src='/assets/logo.png' width={32} height={32} />
              </Box>
              <Box sx={{ cursor: 'pointer' }} onClick={scrollToTop}>
                <Typography variant='body3' component='div'>
                  {greeting}
                </Typography>
                <Typography variant='subtitle3' component='div' lineHeight={1}>
                  Fellas
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
