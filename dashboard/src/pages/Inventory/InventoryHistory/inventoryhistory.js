import React from 'react'
import './inventoryhistory.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography } from '@mui/material';
const inventoryhistory = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Inventory History</Typography>
  </Container>
</div>
  )
}

export default inventoryhistory
