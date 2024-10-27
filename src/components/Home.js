import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Sample images for the homepage (you can replace these with actual URLs)

const Home = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate('/delivery-estimation');
  };

  return (
    <div className="home">
      <h1>Welcome to Our Delivery Service!</h1>
      <p>
        We provide fast and reliable delivery services for all your needs. 
        Our system allows you to estimate delivery times easily based on your 
        location and selected products. Experience hassle-free shopping with us!
      </p>
      
     
      <h2>How It Works</h2>
      <ol>
        <li>Select the products you want to purchase.</li>
        <li>Enter your delivery pincode.</li>
        <li>Get an estimated delivery time and confirm your order.</li>
      </ol>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Fast Delivery:</strong> We ensure your products reach you quickly.</li>
        <li><strong>Quality Assurance:</strong> We guarantee the quality of all our products.</li>
        <li><strong>Easy Estimation:</strong> Our user-friendly interface helps you find estimated delivery times effortlessly.</li>
      </ul>
<br/>

      <button onClick={handleViewProducts} className="view-products-button">View Products</button>
      
      <footer>
        <p>&copy; 2024 Delivery Service Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
