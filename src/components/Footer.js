import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const TextLight = styled('span')({
  fontWeight: 400,
});

const RoundedWrapper = styled(Box)({
  border: '1px solid white',
  borderRadius: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        py: 2,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant='h6'
            component='h5'
            sx={{ color: 'white', fontWeight: 700 }}>
            wknd@<TextLight>2020</TextLight>
          </Typography>
          <RoundedWrapper sx={{ px: 3 }}>
            <Typography
              variant='body2'
              component='h5'
              color='white'
              sx={{ fontWeight: 500 }}>
              alpha version 0.1
            </Typography>
          </RoundedWrapper>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
