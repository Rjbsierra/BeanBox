import React from 'react'
import './inventoryvaluation.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography } from '@mui/material';
const inventoryvaluation = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Inventory Evaluation</Typography>
  </Container>
</div>
  )
}

export default inventoryvaluation
