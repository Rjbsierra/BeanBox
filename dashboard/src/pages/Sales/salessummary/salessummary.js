import React from 'react';
import { Container, Typography, Grid, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import './salessummary.css';
import Navbar from '../../navbar/navbar';

const SalesSummary = () => {

  const containerStyle = {
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: 'white',
    padding: '20px',
    maxWidth: '900px',
    maxHeight: '600px',
    gap: '20px'
  };

  const rows = [
    { id: 1, item: 'Item 1', inStock: 100, addStock: 50, cost: 10.5, stockAfter: 150 },
    { id: 2, item: 'Item 2', inStock: 200, addStock: 30, cost: 8.25, stockAfter: 230 },
  ];

  return (
    <div id="container">
      <Navbar></Navbar>
      <Container sx={containerStyle}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Button variant="text">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>Gross Sales</Typography>
                <Typography>₱0.00</Typography>
              </div>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>Refunds</Typography>
                <Typography>₱0.00</Typography>
              </div>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>Discounts</Typography>
                <Typography>₱0.00</Typography>
              </div>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>Net Sales</Typography>
                <Typography>₱0.00</Typography>
              </div>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>Gross Profit</Typography>
                <Typography>₱0.00</Typography>
              </div>
            </Button>
          </Grid>
        </Grid>

        <Container sx={{ marginTop: '20px' }}>
          <Typography variant="h6">Export</Typography>
          <TableContainer sx={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>In Stock</TableCell>
                  <TableCell>Add Stock</TableCell>
                  <TableCell>Cost</TableCell>
                  <TableCell>Stock After</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.item}</TableCell>
                    <TableCell>{row.inStock}</TableCell>
                    <TableCell>{row.addStock}</TableCell>
                    <TableCell>{row.cost}</TableCell>
                    <TableCell>{row.stockAfter}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Container>
    </div>
  );
};

export default SalesSummary;
