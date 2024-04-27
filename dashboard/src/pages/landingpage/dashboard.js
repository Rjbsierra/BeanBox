import React from 'react'
import { Container, Typography } from '@mui/material';
import './dashboard.css';
import Navbar from '../navbar/navbar'

const landingpage = () => {
  return (
    <div id="container">
      <Navbar/>

      <Container>
      <Typography>
        This is the dashboard
      </Typography>
      </Container>
     
    </div>
  )
}

export default landingpage
