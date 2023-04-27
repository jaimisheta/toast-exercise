import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SimpleTable from './components/table/table';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from './components/loader/loader';
import NoDataCard from './components/table/noDataCard';

export default function Content(props) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const submission = props.submission?.map((submission) => {
      return createData(submission.data);
    })
    if (submission?.length > 0) {
      setRows(submission);
    }

  }, [props.submission]);

  function createData(data) {
    return { email: data.email, firstName: data.firstName, lastName: data.lastName };
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography sx={{ mb: 4 }} variant="h4">Liked Form Submissions</Typography>
      {props.loader ? <Loader /> : rows.length === 0 ? <NoDataCard /> : (<SimpleTable rows={rows} />)}
    </Box >
  );
}
