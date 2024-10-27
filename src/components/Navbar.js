import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import a CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Clinically</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link> {/* Use Link instead of a */}
        <Link to="/contact">Contact Us</Link> {/* Use Link instead of a */}
        <Link to="/about">About Us</Link> {/* Use Link instead of a */}
      </div>
    </div>
  );
};

export default Navbar;
