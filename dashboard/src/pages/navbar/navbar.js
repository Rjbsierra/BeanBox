import { Container, Box, IconButton, Popover, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './navbar.css';
import * as React from 'react';

const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div id="container">
      <Container id="form-container-for-navbar">

    {/* Ganito nalang format for each buttons */}
      
          <IconButton
           
            variant="text"
            id="navbar-button"
            onClick={handleClick}>
                <HomeIcon/>
          </IconButton>
          <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>

      </Container>
    </div>
  )
}

export default Navbar
