import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="My Store Logo" />
        <span>Organic Products</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Products</li>
        <li className="navbar-item">Contact</li>
      </ul>
      <div className="navbar-cart">
        <span className="navbar-cart-icon">🛒</span>
        <span className="navbar-cart-quantity">Cart: 0</span>
      </div>
    </nav>
  );
}

export default Navbar;
