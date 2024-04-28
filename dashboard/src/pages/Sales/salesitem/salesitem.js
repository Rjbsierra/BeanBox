import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import './salesitem.css';
import Navbar from '../../navbar/navbar';
const Dashboard = () => {
  const containerStyle = {
    marginLeft: '20px',
    marginTop: '20px',
    backgroundColor: 'white',
    padding: '20px',
    maxWidth: '900px',
    maxHeight: '600px',
    gap: '20px'
  };

  const rows = [
    { id: 1, category: 'Item 1', itemSold: 100, netSales: 50, cost: 10.5, grossProfit: 150 },
    { id: 1, category: 'Item 2', itemSold: 69, netSales: 4, cost: 20, grossProfit: 150 },
  ];


  return (
    <div id='container'>
      <Navbar></Navbar>
<Container sx={containerStyle}>
<Grid container spacing={1}>
        {/* First Row: Top 5 items */}
        <Grid item xs={6}>
          <Typography variant="h6">Top 5 items</Typography>
        </Grid>
        {/* Second Row: Sales by item chart */}
        <Grid item xs={6}>
          <Typography variant="h6">Sales by item chart</Typography>
          <div style={{ minHeight: '250px' }}>
            {/* Line Chart Component */}
           
          </div>
        </Grid>
      </Grid>
      {/* Export Container */}
      <Container sx={{ marginTop: '20px' }}>
        <Typography variant="h6">Export</Typography>
        {/* Table Container */}
        <TableContainer sx={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Item sold</TableCell>
                <TableCell>Net sales</TableCell>
                <TableCell>Cost of goods</TableCell>
                <TableCell>Gross profit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.itemSold}</TableCell>
                  <TableCell>{row.netSales}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                  <TableCell>{row.grossProfit}</TableCell>
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

export default Dashboard;
