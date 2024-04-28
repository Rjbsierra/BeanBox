import { Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../navbar/navbar'
import './salesitem.css';

const salesitem = () => {
  return (
    <div id="container">
        <Navbar></Navbar>
      <Container>
        <Typography>Sales Item</Typography>
      </Container>
    </div>
  )
}

export default salesitem
