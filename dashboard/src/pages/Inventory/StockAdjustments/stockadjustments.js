import React from 'react'
import './stockadjustments.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography } from '@mui/material';
const stockadjustments = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Stock adjustments</Typography>
  </Container>
</div>
  )
}

export default stockadjustments
