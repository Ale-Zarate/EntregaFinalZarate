import React from 'react';
import './ItemDetail.css';
import product1Image from '../images/product1.jpg';

const ItemDetail = () => {
  return (
    <div className="item-detail">
      <h2 className="item-detail-title">Product Detail</h2>
      <div className="item-detail-content">
        <img className="item-detail-image" src={product1Image} alt="Product 1" />
        <div className="item-detail-info">
          <h3 className="item-detail-name">Planta 1</h3>
          <p className="item-detail-description">Planta y macetero incluido</p>
          <span className="item-detail-price">$99.99</span>
          <div className="quantity-selector">
            <button className="quantity-decrease">-</button>
            <span className="quantity">1</span>
            <button className="quantity-increase">+</button>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;


