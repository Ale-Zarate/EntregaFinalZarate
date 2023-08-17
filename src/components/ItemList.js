import React from 'react';
import products from '../data';
import './ItemList.css';
import product1Image from '../images/product1.jpg';

const ItemList = () => {
  return (
    <div className="item-list">
      <h2 className="item-list-title">Product Catalog</h2>
      <ul className="item-list-ul">
        <li className="item">
          <img className="item-image" src={product1Image} alt="Product 1" />
          <div className="item-info">
            <h3 className="item-name">Planta 1</h3>
            <p className="item-description">Macetero incluido</p>
            <span className="item-price">$99.99</span>
            <button className="item-add-button">Add to Cart</button>
          </div>
        </li>
        {/* Repite una estructura similar para otros productos */}
      </ul>
    </div>
  );
}

export default ItemList;
