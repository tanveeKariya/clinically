import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeliveryEstimation from './components/DeliveryEstimation';
import ProductList from './components/ProductList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import './App.css';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery-estimation" element={<DeliveryEstimation />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/order-summary" element={<OrderSummary />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
