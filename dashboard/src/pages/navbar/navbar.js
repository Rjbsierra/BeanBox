import { Container, IconButton, Popover, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './navbar.css';
import * as React from 'react';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const linkStyle = {
   paddingRight: 20,
   paddingLeft: 5
  };

  // State variable to manage all popovers
  const [popoverState, setPopoverState] = React.useState({});

  // Function to handle opening popover
  const handlePopoverOpen = (event, popoverId) => {
    setPopoverState({ ...popoverState, [popoverId]: event.currentTarget });
  };

  // Function to handle closing popover
  const handlePopoverClose = (popoverId) => {
    setPopoverState({ ...popoverState, [popoverId]: null });
  };

  // Render
  return (
    <div id="container">
      <Container id="form-container-for-navbar">
      
        {/* Equalizer Icon Button */}
        <IconButton
          variant="text"
          id="navbar-button"
          onClick={(event) => handlePopoverOpen(event, 'equalizer')}>
          <EqualizerIcon/>
        </IconButton>
        {/* Equalizer Icon Popover */}
        <Popover
          open={Boolean(popoverState['equalizer'])}
          anchorEl={popoverState['equalizer']}
          onClose={() => handlePopoverClose('equalizer')}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <Container>
          <Link to="/salessummary">Sales Summary</Link><br/>
          <Link to="/salesitem">Sales by Item</Link><br/>
          </Container>
          
        </Popover>

        {/* ShoppingCart Icon Button */}
        <IconButton
          variant="text"
          id="navbar-button"
          onClick={(event) => handlePopoverOpen(event, 'shoppingCart')}>
          <ShoppingCartIcon/>
        </IconButton>
        {/* ShoppingCart Icon Popover */}
        <Popover
          open={Boolean(popoverState['shoppingCart'])}
          anchorEl={popoverState['shoppingCart']}
          onClose={() => handlePopoverClose('shoppingCart')}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <Container>
          <Link to="/itemlist">Item list</Link><br/>
          <Link to="/categories">Categories</Link><br/>
          </Container>
          
        </Popover>
        
        {/* Purchase */}
        <IconButton
          variant="text"
          id="navbar-button"
          onClick={(event) => handlePopoverOpen(event, 'purchase')}>
          <InventoryIcon/>
        </IconButton>
        {/* Purchase Popover */}
        <Popover
          open={Boolean(popoverState['purchase'])}
          anchorEl={popoverState['purchase']}
          onClose={() => handlePopoverClose('purchase')}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <Container>
          <Link to="/purchaseorders">Purchase Orders</Link><br/>
<Link to="/stockadjustments">Stock Adjustments</Link><br/>
<Link to="/inventorycounts">Inventory counts</Link><br/>
<Link to="/inventoryhistory">Inventory history</Link><br/>
<Link to="/inventoryvaluation">Inventory Valuation</Link><br/>

          </Container>
        
        </Popover>

        {/* Employee */}
        <IconButton
          variant="text"
          id="navbar-button"
          onClick={(event) => handlePopoverOpen(event, 'employee')}>
          <AccountBoxIcon/>
        </IconButton>
        {/* Employee Popover */}
        <Popover
          open={Boolean(popoverState['employee'])}
          anchorEl={popoverState['employee']}
          onClose={() => handlePopoverClose('employee')}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <Container>
          <Link to="/employee">Employee list</Link><br/>
          </Container>
        
        </Popover>

      </Container>
    </div>
  )
}

export default Navbar;
