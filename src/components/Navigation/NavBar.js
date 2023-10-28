// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, InputBase } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import './Navbar.css'; 

const Navbar = ({ user, isAdmin, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
        </Link>
        {!user ? (
          <div>
            <Link to="/login">
              <Button color="inherit">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button color="inherit">Sign Up</Button>
            </Link>
          </div>
        ) : (
          <div>
            <InputBase placeholder="Search..." />
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Button color="inherit" onClick={onLogout}>
              Log Out
            </Button>
            {isAdmin && (
              <Link to="/add-products">
                <Button color="inherit">Add Products</Button>
              </Link>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
