import React from 'react'
import './itemlist.css'
import Navbar from '../../navbar/navbar';
import { Button, Container, Typography } from '@mui/material';
const itemlist = () => {
  return (
    <div id="container">
    <Navbar></Navbar>
  <Container>
    <Typography>Item List</Typography>

    <Container>
        <Button variant='contained'>Add Item</Button>
      
    </Container>
  </Container>
</div>
  )
}
export default itemlist
