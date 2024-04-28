import React from 'react'
import './inventorycounts.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography } from '@mui/material';
const inventorycounts = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Inventory Counts</Typography>
  </Container>
</div>
  )
}

export default inventorycounts
