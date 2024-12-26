

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity } from '../Redux/Cartslice'; // Ensure proper imports
import "../styles/productDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const cart = useSelector(state => state.cart.products); // Getting products from the store
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Correct API endpoint to fetch product details
    axios.get(`https://66d19f5362816af9a4f44d1d.mockapi.io/proucts/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  // If the product is still loading, show a loading message
  if (!product) return <div>Loading...</div>;

  // Add product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch action to add product
  };

  // Remove product from cart (decrease quantity or remove entirely)
  const handleRemoveFromCart = () => {
    dispatch(decreaseQuantity({ id: product.id })); // Dispatch action to decrease quantity
  };

  // Navigate to the checkout page
  const handleGoToCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout route
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">Price: ${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        <button onClick={handleGoToCheckout} className="checkout-button">
          Go to Checkout
        </button>
        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
