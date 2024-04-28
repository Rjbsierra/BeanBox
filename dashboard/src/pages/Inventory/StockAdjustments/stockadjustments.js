import React from 'react'
import './stockadjustments.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StockAdjustments = () => {

  const navigate = useNavigate();

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

  const handleStockAdjustments = () => {
    navigate('/addstockadjustments');
  };


  return (
    <div id="container">
    <Navbar></Navbar>
    <Container sx={containerStyle}>
        <Typography variant="h5" gutterBottom>Stock Adjustments</Typography>
        <Typography variant="body1" gutterBottom>
          Increase and Decrease stock levels for received items, damages, and loss
        </Typography>
        <Button variant="contained" 
        sx={{ marginBottom: '20px' }}
        onClick={handleStockAdjustments}>
          Add Stock Adjustment
        </Button>
      </Container>
</div>
  )
}

export default StockAdjustments
