import * as React from 'react';
import Table from '@mui/material/Table';
import { TableFooter,TablePagination } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import google from "../../../assets/logos/Google__G__Logo.svg.png";
import { red } from '@mui/material/colors';

function createData(name, type, vacancy, job, position) {
  return { name, type,vacancy, job,position };
}

const rows = [
  createData('Google', 'Software', 6.0, 'FTE', 'SWE'),
  createData('Google', 'Software', 6.0, 'FTE', 'SWE'),
  createData('Google', 'Software', 6.0, 'FTE', 'SWE'),
  createData('Google', 'Software', 6.0, 'FTE', 'SWE'),
  createData('Google', 'Software', 6.0, 'FTE', 'SWE'),
];

export default function BasicTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name </TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Vacancy</TableCell>
            <TableCell align="right">Job/Type</TableCell>
            <TableCell align="right">Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={google} alt={row.name}  style={{
                    height:"30px",
                    width:"30px",
                    marginRight:"10px"
                }}/>  {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.vacancy}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              style={{
                border:'1px solid red',
              

              }}
            />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}
