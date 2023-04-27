import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import PopupSnackbar from './components/snackbar/popupSnackbar';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Content />
      </Container>
      <PopupSnackbar />
    </>
  );
}

export default App;
