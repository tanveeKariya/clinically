import React, { useState } from 'react';

const ProductDetails = ({ product, onEstimate }) => {
  const [pincode, setPincode] = useState('');

  const handleEstimate = () => {
    onEstimate(pincode);
  };

  return (
    <div className="product-details">
      <h2>{product['Product Name']}</h2>
      <p>Price: ${product.Price}</p>
      <input 
        type="text" 
        placeholder="Enter Pincode" 
        value={pincode} 
        onChange={(e) => setPincode(e.target.value)} 
      />
      <button onClick={handleEstimate}>Estimate Delivery</button>
    </div>
  );
};

export default ProductDetails;
