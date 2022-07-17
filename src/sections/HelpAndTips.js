import {
  Box,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React, { useContext } from 'react';
import WeekendContext from '../context';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Shape3 from '../../public/assets/shape3.svg';

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

const HelpAndTips = () => {
  const { data, loading } = useContext(WeekendContext);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BoxWrapper>
      <Container sx={{ position: 'relative' }}>
        <Shape3 style={{ position: 'absolute', top: '0', right: '0' }} />
        <Typography variant='h2' component='h2' color='white' sx={{ mb: 4 }}>
          Help & Tips
        </Typography>
        <Box sx={{ mx: { sm: 0, md: 8 } }}>
          <Grid container spacing={0.5}>
            {loading.helpAndTips
              ? Array.from(new Array(3)).map(() => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Skeleton
                      variant='rectangular'
                      sx={{
                        width: '100%',
                        height: '10rem',
                        maxHeight: '180px',
                        bgcolor: 'GrayText',
                      }}
                    />
                  </Grid>
                ))
              : data.helpAndTips && (
                  <ImageList
                    cols={sm ? 1 : md ? 2 : 3}
                    sx={{ mx: { sm: 0, md: 8 } }}>
                    {data.helpAndTips.map((item) => (
                      <ImageListItem key={item.image}>
                        <img
                          src={item.image}
                          srcSet={item.image}
                          alt={item.slug}
                          loading='lazy'
                        />
                        <ImageListItemBar
                          title={item.title}
                          actionIcon={
                            <IconButton
                              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${item.title}`}>
                              <ArrowForwardIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                )}
          </Grid>
        </Box>
      </Container>
    </BoxWrapper>
  );
};

export default HelpAndTips;
