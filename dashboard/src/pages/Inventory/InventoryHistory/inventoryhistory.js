import React from 'react';
import './inventoryhistory.css'; 
import Navbar from '../../navbar/navbar';
import { Container, Typography, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CustomInputAdornment = () => null;
const setError = () => {};
const dayjs = () => {};

const containerStyle = {
  marginLeft: '20px',
  marginTop: '20px',
  marginBottom: '20px',
  backgroundColor: 'white',
  padding: '20px',
  maxWidth: '600px',
  maxHeight: '600px',
  gap: '20px'
};

function AddWarningIconWhenInvalidRange() {
  const [error, setError] = React.useState([null, null]);

  return (
    <div id="container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Date"
          maxDate={dayjs('2022-04-17')}
          defaultValue={dayjs('2022-04-18')}
          onError={setError}
          slots={{ inputAdornment: CustomInputAdornment }}
          slotProps={{
            inputAdornment: { hasError: !!error },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}

const rows = [];

function inventoryhistory() {
  return (
    <div id="container">
    <Navbar />
    <Container sx={containerStyle}>
      <Grid container>
        <Grid item xs={12}>
          {/* DateRangePicker */}
          <Typography variant="h5" gutterBottom>Calender</Typography>
          <AddWarningIconWhenInvalidRange />
        </Grid>
        <Grid item xs={12}>
          {/* Export Typography */}
          <Typography variant="h5" gutterBottom>Export</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* Custom Table */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell align="right">Item</TableCell>
                  <TableCell align="right">Store</TableCell>
                  <TableCell align="right">Employee</TableCell>
                  <TableCell align="right">Reason</TableCell>
                  <TableCell align="right">Adjustment</TableCell>
                  <TableCell align="right">Stock After</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  </div>
  );
}

export default inventoryhistory;
