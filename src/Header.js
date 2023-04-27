import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { createMockFormSubmission, onMessage } from './service/mockServer';
import PopupSnackbar from './components/snackbar/popupSnackbar';

export default function Header(props) {
  const [submissionEntry, setSubmissionEntry] = useState();
    const [open, setOpen] = React.useState(false);


  function handleNewMessage(message) {
    setSubmissionEntry(message);
  }

  const doNewSubmission = async () => {
    setOpen(true);
    await onMessage(handleNewMessage);
    await createMockFormSubmission();
    props.setSnackbar(true)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#4535b0' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: '#ff084b',
              "&:hover": {
                backgroundColor: '#c00c3d'
              }
            }}
            onClick={() => doNewSubmission()}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
      {props.snackbar && submissionEntry &&
        (<PopupSnackbar open={open} setOpen={setOpen} submissionEntry={submissionEntry} saveItem={() => props.saveItem(submissionEntry)} />)}
    </Box>
  );
}
