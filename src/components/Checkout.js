import React from 'react';
import Brief from './Brief';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-content">
        
        <Brief />
      </div>
    </div>
  );
}

export default Checkout;
