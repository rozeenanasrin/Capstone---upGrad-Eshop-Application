import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavigationBar = ({ isLoggedIn, isAdmin, handleLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Eshop
        </Typography>
        {isLoggedIn ? (
          <div>
            <form onSubmit={handleSearch}>
              <div className="search-bar">
                <InputBase
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" color="inherit">
                  <SearchIcon />
                </IconButton>
              </div>
            </form>
            <Link to="/">
              Home
            </Link>
            <Button color="inherit" onClick={handleLogout}>
              Log Out
            </Button>
            {isAdmin && (
              <Link to="/add-products">
                Add Products
              </Link>
            )}
          </div>
        ) : (
          <div>
            <Link to="/login">
              Log In
            </Link>
            <Link to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

