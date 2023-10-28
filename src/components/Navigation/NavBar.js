import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavigationBar = ({ isLoggedIn, isAdmin, handleLogout }) => {
  return (
    <div className="navbar">
      <Link to="/">
        Eshop
      </Link>
      {isLoggedIn ? (
        <div>
          <input type="text" placeholder="Search..." />
          <Link to="/">Home</Link>
          <button onClick={handleLogout}>Log Out</button>
          {isAdmin && <Link to="/add-products">Add Products</Link>}
        </div>
      ) : (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
