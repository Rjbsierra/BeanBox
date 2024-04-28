import { Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../navbar/navbar'
import './salessummary.css';
const salessummary = () => {
  return (
    <div id="container">
         <Navbar></Navbar>
      <Container>
        <Typography>
            Sales Summary
        </Typography>
      </Container>
    </div>
  )
}

export default salessummary
