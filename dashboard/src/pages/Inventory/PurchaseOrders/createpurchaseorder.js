import React from 'react';
import './createpurchaseorder.css'; 
import Navbar from '../../navbar/navbar';
import { Container, Typography, Grid, TextField, MenuItem, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const createpurchaseorder = () => {
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

  const rows = [
    { item: 'Item 1', inStock: 10, incoming: 5, quantity: 15, purchaseCost: 2.5, amount: 37.5 },
    { item: 'Item 2', inStock: 20, incoming: 0, quantity: 20, purchaseCost: 3, amount: 60 },
    { item: 'Item 3', inStock: 15, incoming: 10, quantity: 25, purchaseCost: 2, amount: 50 },
  ];

  return (
    <div id="container">
      <Navbar />
      <Container sx={containerStyle}>
        <Grid container sx={{ marginBottom: '20px' }}>
          <Grid item xs={12}>
            {/* Supplier Typography */}
            <Typography variant="subtitle1" gutterBottom>Supplier</Typography>
          </Grid>
          <Grid item xs={12}>
            {/* Supplier Dropdown */}
            <TextField
              select
              fullWidth
              label="Select"
              variant="standard"
              sx={{ marginBottom: '20px' }}
            >
              {/* Empty */}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            {/* Notes Typography */}
            <Typography variant="subtitle1" gutterBottom>Notes</Typography>
          </Grid>
          <Grid item xs={12}>
            {/* Notes TextField */}
            <TextField
              multiline
              fullWidth
              variant="standard"
              sx={{ marginBottom: '20px' }}
            />
          </Grid>
          <Grid item xs={12}>
            {/* DataGrid */}
            <TableContainer component={Table}>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">In Stock</TableCell>
                  <TableCell align="right">Incoming</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Purchase Cost</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.item}
                    </TableCell>
                    <TableCell align="right">{row.inStock}</TableCell>
                    <TableCell align="right">{row.incoming}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.purchaseCost}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TableContainer>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Button variant="contained" sx={{ marginRight: '10px' }}>Cancel</Button>
          <Button variant="contained" sx={{ marginRight: '10px' }}>Save as Draft</Button>
          <Button variant="contained">Create</Button>
        </Grid>
      </Container>
    </div>
  );
}

export default createpurchaseorder;
