import React from 'react'
import './purchaseorders.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography } from '@mui/material';
const purchaseorders = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Purchase Orders</Typography>
  </Container>
</div>
  )
}

export default purchaseorders
