import React from 'react'
import './employee.css';
import Navbar from '../navbar/navbar';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography, Button, Grid} from '@mui/material';
const employee = () => {

  const containerStyle = {
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: 'white',
    padding: '20px',
    maxWidth: '600px',
    maxHeight: '600px',
    gap: '20px'
};

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'role', headerName: 'Role', width: 130 },
];

const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'Manager' },
   
];

  return (
    <div id="container">
    <Navbar></Navbar>
    <Container sx={containerStyle}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Button variant="contained" color="primary">Add Employee</Button>
                </Grid>
                <Grid item>
                    <Typography variant="h5" gutterBottom>Employees</Typography>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
</div>
  )
}

export default employee
