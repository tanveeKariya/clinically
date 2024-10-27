import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import './OrderSummary.css';
import DeliveryEstimation from './DeliveryEstimation';

const OrderSummary = () => {
  const location = useLocation();
  const { product, estimatedDate, estimatedTime } = location.state || {};

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {product ? (
        <div>
          <p><strong>Product Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Estimated Delivery Date:</strong> {estimatedDate}</p>
          <p><strong>Estimated Delivery Time:</strong> {estimatedTime}</p>
          {/* <Link to="#"><button>Proceed to Pay</button></Link> */}
        </div>
      ) : (
        <p>No order details found.</p>
      )}
      
      <br />
      <br />
      <div className="thank-you">
        <h2>Thank You for Your Order!</h2>
        <p>Your order has been successfully placed. We appreciate your business!</p>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  product: PropTypes.object,
  estimatedDate: PropTypes.string,
  estimatedTime: PropTypes.string,
};

export default OrderSummary;
