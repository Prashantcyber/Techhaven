import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../Components/ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Cartslice';
import '../styles/homePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://676d27480e299dd2ddfe9aa1.mockapi.io/data')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, [1]);

  return (
    <div>
      <h1 className='home-h1'>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => dispatch(addToCart(product))}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
