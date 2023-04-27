import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Card } from '@mui/material';

export default function SimpleTable(props) {
  return (
    <TableContainer component={Card}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow sx={{ 'th': { fontWeight: '600' } }}>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>First Name</TableCell>
            <TableCell align='center'>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow
              key={index.toString()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' component='th' scope='row'>
                {row.email}
              </TableCell>
              <TableCell align='center'>{row.firstName}</TableCell>
              <TableCell align='center'>{row.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}