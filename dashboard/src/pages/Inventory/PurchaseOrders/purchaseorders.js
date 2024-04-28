import React from 'react'
import './purchaseorders.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Purchaseorders = () => {

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

  const handlePurchaseOrder = () => {
    navigate('/createpurchaseorder');
  };


  return (
    <div id="container">
    <Navbar></Navbar>
    <Container sx={containerStyle}>
        <Typography variant="h5" gutterBottom>Purchase Orders</Typography>
        <Typography variant="body1" gutterBottom>
          Plan purchases, send orders to suppliers and track stock reciepts
        </Typography>
        <Button variant="contained" sx={{ marginBottom: '20px' }}
        onClick={handlePurchaseOrder}>
          Add Purchase Order
        </Button>
      </Container>
</div>
  )
}

export default Purchaseorders
