import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

export default function PopupSnackbar(props) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  const messageWrapper = () => {
    const infoStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'left',
      gap: 1,
      pr: 8,
      '@media (max-width: 480px)': {
        alignItems: 'center',
        pr: 0,
        width: '100%'
      }
    }

    return (
      <Box sx={infoStyle}>
        <Box>
          Jaimi Sheta
        </Box>
        <Box>
          jaimi.sheta@rdbrck.com
        </Box>
      </Box>
    )
  }

  return (
    <Snackbar
      key={'jaimi'}
      open={true}
      autoHideDuration={6000}
      message={messageWrapper()}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      style={{ width: 'auto', height: 'auto' }}
      action={
        <Box>
          <Button sx={{ color: '#56c1dc', fontWeight: '600', fontSize: '16px' }} size="small" >
            LIKE
          </Button>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ color: '#fff' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      }
    />
  );
}