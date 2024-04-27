import { Container, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <div id="container">
      <Container id="form-container-for-navbar">

    {/* Ganito nalang format for each buttons */}
      
          <IconButton
            href="/"
            variant="text"
            id="navbar-button">
                <HomeIcon/>
          </IconButton>
        

      </Container>
    </div>
  )
}

export default navbar
