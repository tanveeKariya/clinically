import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './DeliveryEstimation.css';
import { readCSV } from '../utils/csvReader';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import './DeliveryEstimation.css';
import { useNavigate } from 'react-router-dom';
import OrderSummary from './OrderSummary';
const DeliveryEstimation = ({ message, estimatedDate, estimatedTime, onConfirm }) => {
  const [pincodes, setPincodes] = useState([]);
  const [deliveryMessage, setDeliveryMessage] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState({ date: '', time: '' });
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputPincode, setInputPincode] = useState('');
  const [hasEstimated, setHasEstimated] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [provider, setProvider] = useState(null);
  const navigate = useNavigate();
  const imageUrl = 'https://img.buzzfeed.com/buzzfeed-static/static/2018-12/28/14/enhanced/buzzfeed-prod-web-01/original-2549-1546024507-3.png?crop=1200:628;0,0';

  useEffect(() => {
    const loadData = async () => {
      try {
        const pincodesData = await readCSV('/Pincodes.csv');
        setPincodes(pincodesData);

        const productsData = await readCSV('/Products.csv');
        const formattedProducts = productsData.map(product => ({
          id: product['Product ID'],
          name: product['Product Name'],
          price: parseFloat(product['Price'])
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error loading data:', error);
        setDeliveryMessage('Failed to load data. Please try again later.');
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (provider && (provider === 'Provider A' || provider === 'Provider B')) {
      const countdownInterval = setInterval(() => {
        const now = new Date();
        let cutoffTime;

        if (provider === 'Provider A') {
          cutoffTime = new Date();
          cutoffTime.setHours(17, 0, 0, 0);
        } else if (provider === 'Provider B') {
          cutoffTime = new Date();
          cutoffTime.setHours(9, 0, 0, 0);
        }

        const remainingTime = cutoffTime - now;
        if (remainingTime > 0) {
          const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
          const seconds = Math.floor((remainingTime / 1000) % 60);
          setCountdown(`${hours}h ${minutes}m ${seconds}s`);
        } else {
          setCountdown('Same-day cutoff time has passed');
          clearInterval(countdownInterval);
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [provider]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setDeliveryMessage('');
    setEstimatedDelivery({ date: '', time: '' });
    setInputPincode('');
    setHasEstimated(false);
    setCountdown(null);
  };

  const handleEstimate = (pincode) => {
    if (!/^\d{6}$/.test(pincode) || pincode < 100000 || pincode > 125000) {
      setDeliveryMessage('Please enter a valid pincode');
      setEstimatedDelivery({ date: '', time: '' });
      setHasEstimated(false);
      return;
    }

    const pincodeInfo = pincodes.find(item => item.Pincode === pincode);

    if (pincodeInfo) {
      setProvider(pincodeInfo['Logistics Provider']);
      const estimatedDeliveryMessage = `Estimated delivery by ${pincodeInfo['Logistics Provider']} in ${pincodeInfo['TAT']} days.`;
      setDeliveryMessage(estimatedDeliveryMessage);

      const currentDate = new Date();
      const deliveryDays = parseInt(pincodeInfo['TAT']);
      const estimatedDeliveryDate = new Date(currentDate.setDate(currentDate.getDate() + deliveryDays));

      setEstimatedDelivery({
        date: estimatedDeliveryDate.toLocaleDateString(),
        time: '09:00'
      });

      setHasEstimated(true);
    } else {
      setDeliveryMessage('Delivery not available for this pincode.');
      setEstimatedDelivery({ date: '', time: '' });
      setHasEstimated(false);
    }
  };

  const handleConfirmOrder = () => {
    console.log("Selected Product:", selectedProduct);
    console.log("Estimated Delivery Date:", estimatedDelivery.date);
    console.log("Estimated Delivery Time:", estimatedDelivery.time);

    navigate('/order-summary', { 
      state: { 
        product: selectedProduct, 
        estimatedDate: estimatedDelivery.date,
        estimatedTime: estimatedDelivery.time 
      }
    });

    alert(`Order confirmed for ${selectedProduct.name}!\nEstimated Delivery Date: ${estimatedDelivery.date}\nEstimated Delivery Time: ${estimatedDelivery.time}`);
};

  return (
    <div className="delivery-estimation-page">
      {!selectedProduct ? (
        <ProductList products={products} onSelectProduct={handleSelectProduct} />
      ) : (
        <div className="details">
          <h2>Selected Product: {selectedProduct.name}</h2>
          <p>Price: ${selectedProduct.price.toFixed(2)}</p>
          <img src={imageUrl} alt={selectedProduct.name} style={{ width: '100%' }} />
          <input 
            type="text" 
            value={inputPincode} 
            onChange={(e) => setInputPincode(e.target.value)} 
            placeholder="Enter your pincode" 
            disabled={hasEstimated}
          />
          <button onClick={() => handleEstimate(inputPincode)} disabled={hasEstimated}>
            Estimate Delivery
          </button>
          <br />
          <button type="button" onClick={() => setInputPincode('')}>Reset Pincode</button>
        </div>
      )}

      <div className="delivery-details">
        <div>{deliveryMessage}</div>
        {estimatedDelivery.date && estimatedDelivery.time && (
          <div>
            <strong>Estimated Delivery Date:</strong> {estimatedDelivery.date} <br />
            <strong>Estimated Delivery Time:</strong> {estimatedDelivery.time}
          </div>
        )}
        {provider && countdown && (
          <div>
            <strong>Countdown for Same-Day Delivery:</strong> {countdown}
          </div>
        )}
      </div>

      <button type="button" onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

DeliveryEstimation.propTypes = {
  message: PropTypes.string,
  estimatedDate: PropTypes.string,
  estimatedTime: PropTypes.string,
  onConfirm: PropTypes.func.isRequired
};

export default DeliveryEstimation;
