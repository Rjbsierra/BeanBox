import React from 'react'
import './inventorycounts.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography, Button } from '@mui/material';
const inventorycounts = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "20px",
    marginTop: "20px",
    backgroundColor: "white",
    padding: "20px",
    maxWidth: "600px",
    maxHeight: "600px",
    gap: "20px"
  };

  return (
    <div id="container">
    <Navbar></Navbar>
    <Container sx={containerStyle}>
        <Typography variant="h5" gutterBottom>Inventory Counts</Typography>
        <Typography variant="body1" gutterBottom>
          Perform full or partial stocktakes with a barcode scanner or manually
        </Typography>
        <Button variant="contained" sx={{ marginBottom: '20px' }}>
          Add Inventory Count
        </Button>
      </Container>
</div>
  )
}

export default inventorycounts
