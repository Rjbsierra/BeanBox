import React from 'react'
import './employee.css';
import Navbar from '../navbar/navbar';
import { Container, Typography } from '@mui/material';
const employee = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Employee</Typography>
  </Container>
</div>
  )
}

export default employee
