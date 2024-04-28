import React from 'react'
import './categories.css'
import Navbar from '../../navbar/navbar';
import { Container, Typography } from '@mui/material';
const categories = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Categories</Typography>
  </Container>
</div>
  )
}

export default categories
