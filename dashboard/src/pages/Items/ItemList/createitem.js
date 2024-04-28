import React from "react";
import "./createitem.css";
import Navbar from "../../navbar/navbar";
import {
  Grid,
  Item,
  Radio,
  Checkbox,
  Box,
  Button,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const CreateItem = () => {
    const boxStyle = {
      display: "flex",
      flexDirection: "row",
    };
    
    const containerStyle = {
    marginLeft: "20px",
      marginTop: "20px",
      backgroundColor: "white",
      padding: "20px",
      maxWidth: "600px",
      maxHeight: "600px",
      gap: "20px"
    };
  
    const buttonContainerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: "20px",
      };
    
      const buttonStyle = {
        marginRight: "10px",
      };

    return (
      <div id="container">
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Container sx={containerStyle}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '20px' }}>
              <Grid container spacing={2} sx={{ flex: 1 }}>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Name" variant="standard" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Category"
                      fullWidth
                    >
                      <MenuItem value={10}>No Category</MenuItem>
                      <MenuItem value={30}>Add Category</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
  
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Description"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="The item is available for sale"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Sold by:</Typography>
                  <RadioGroup>
                    <FormControlLabel control={<Radio />} label="Each" />
                    <FormControlLabel control={<Radio />} label="Weight/Volume" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Price" variant="standard" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    type="number"
                    label="Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="SKU" variant="standard" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="Barcode" variant="standard" fullWidth />
                </Grid>
              </Grid>
            </Box>
          </Container>
  
          <Box sx={buttonContainerStyle}>
          <Button variant='contained' style={buttonStyle}>Save</Button>
          <Button variant='contained'>Cancel</Button>
        </Box>
        </div>
      </div>
    );
  };
  
  export default CreateItem;
  