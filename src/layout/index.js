import { Box } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import TopBar from '../components/TopBar';
import { WeekendProvider } from '../context';

const Index = ({ children }) => {
  return (
    <WeekendProvider>
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <TopBar />
        <Box sx={{ height: '100%', pt: 8 }}>{children}</Box>\
        <Footer />
      </Box>
      <Notification />
    </WeekendProvider>
  );
};

export default Index;
