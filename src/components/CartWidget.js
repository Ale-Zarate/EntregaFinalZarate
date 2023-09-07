import React from 'react';

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-quantity">Cart: {cartCount}</span>
    </div>
  );
}

export default CartWidget;
