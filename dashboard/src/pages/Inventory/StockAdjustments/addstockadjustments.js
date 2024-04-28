import React from 'react';
import { Container, Typography, Grid, TextField, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './addstockadjustments.css';
import Navbar from '../../navbar/navbar';

const addstockadjustment = () => {
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

    // Dummy data for the table
    const rows = [
        { id: 1, item: 'Item 1', inStock: 100, addStock: 20, cost: 10, stockAfter: 120 },
        { id: 2, item: 'Item 2', inStock: 50, addStock: 10, cost: 8, stockAfter: 60 },
        { id: 3, item: 'Item 3', inStock: 80, addStock: 30, cost: 12, stockAfter: 110 },
        // Add more rows as needed
    ];

    return (
       

        <div id="container">
             <Navbar></Navbar>
             
<Container sx={containerStyle}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>Reason</Typography>
                    {/* Dropdown for reason */}
                    {/* Textfield for notes */}
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>Items</Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>In Stock</TableCell>
                                    <TableCell>Add Stock</TableCell>
                                    <TableCell>Cost</TableCell>
                                    <TableCell>Stock After</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.item}</TableCell>
                                        <TableCell>{row.inStock}</TableCell>
                                        <TableCell>{row.addStock}</TableCell>
                                        <TableCell>{row.cost}</TableCell>
                                        <TableCell>{row.stockAfter}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

            <Grid container justifyContent="flex-end">
                <Button variant="outlined">Cancel</Button>
                <Button variant="contained" color="primary">Adjust</Button>
            </Grid>
        </Container>
        </div>
        
    );
}

export default addstockadjustment;
