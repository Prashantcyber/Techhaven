import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <h4>Price: ${product.price}</h4>
      <button onClick={onAddToCart}>Add to Cart</button>
      <Link to={`/product/${product.id}`} className='view-detail'>View Details</Link>
    </div>
  );
};

export default ProductCard;
