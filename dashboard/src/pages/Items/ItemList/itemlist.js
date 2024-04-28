import React from 'react';
import './itemlist.css';
import Navbar from '../../navbar/navbar';
import { Button, Container, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const Itemlist = () => {
  const navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'itemName', headerName: 'Item Name', width: 150 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'cost', headerName: 'Cost', width: 130 },
    { field: 'margin', headerName: 'Margin', width: 130 },
    { field: 'inStock', headerName: 'In stock', width: 130 },
  ];

  const rows = [
    { id: 1, itemName: 'Milk', category: 'Dairy', price: 2.99, cost: 1.50, margin: 1.49, inStock: 100 }
  ];
  
  const handleAddingItem = () => {
    navigate('/createitem');
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    maxWidth: '800px',
    margin: '20px', 
  };

  return (
    <div id="container">
      <Navbar />
      <Container sx={containerStyle}>
  
        <Button variant="contained" onClick={handleAddingItem} sx={{ marginBottom: '20px' }}>
          Add Item
        </Button>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Container>
    </div>
  );
};

export default Itemlist;
