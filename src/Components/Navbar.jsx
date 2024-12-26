import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/navbar.css'; // Importing custom CSS for the navbar

const Navbar = () => {
  const cart = useSelector(state => state.cart.products); // Get the cart items from Redux store

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0); // Calculate the total number of items in the cart

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h2>Tech Haven</h2></Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
