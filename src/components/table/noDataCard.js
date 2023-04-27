import * as React from 'react';
import { Box, Card } from '@mui/material';

export default function NoDataCard() {
  return (
    <Box component={Card} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', px: 4, py: 8 }}>
      No Data available. Please add and like new submission or refresh the page.
    </Box>
  );
}