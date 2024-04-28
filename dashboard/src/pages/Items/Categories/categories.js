import React from 'react';
import './categories.css';
import Navbar from '../../navbar/navbar';
import { Container, Typography, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Categories = () => {
  const columns = [{ field: 'name', headerName: 'Category Name', width: 200 }];

  const rows = [{ id: 1, name: 'Dessert' }];

  const containerStyle = {
    marginLeft: "20px",
      marginTop: "20px",
      backgroundColor: "white",
      padding: "20px",
      maxWidth: "600px",
      maxHeight: "600px",
      gap: "20px"
    };

  return (

    <div id="container">
      <Navbar />
      <Container sx={containerStyle}>
   
        <Button variant="contained" sx={{ marginBottom: '20px' }}>
          Add Category
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

export default Categories;
