import React, { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import WeekendContext from '../context';

const Notification = ({ ...props }) => {
  const { error, closeNotify } = useContext(WeekendContext);
  return (
    <>
      <Snackbar
        open={error.status}
        autoHideDuration={5000}
        onClose={closeNotify}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert
          onClose={closeNotify}
          severity='error'
          variant='filled'
          sx={{ width: '100%' }}>
          {error.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
