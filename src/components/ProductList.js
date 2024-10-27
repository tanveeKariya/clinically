// ProductList.js
import React from 'react';
import './ProductList.css'; // Import a CSS file for styling

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card" onClick={() => onSelectProduct(product)}>
          <img 
            src="https://img.buzzfeed.com/buzzfeed-static/static/2018-12/28/14/enhanced/buzzfeed-prod-web-01/original-2549-1546024507-3.png?crop=1200:628;0,0" 
            alt={product.name} 
            className="product-image" 
          />
          <h3>{product.name}</h3>
          <p>ID: {product.id}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
