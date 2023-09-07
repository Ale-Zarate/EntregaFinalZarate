import React from 'react';
import './ItemList.css';
import product2Image from '../images/product2.jpg';

const ItemList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Bonsai de Invierno',
      description: 'Macetero incluido',
      price: 59.99,
      image: product2Image,
    },
    // Puedes agregar más productos aquí
  ];

  return (
    <div className="item-list">
      <h2 className="item-list-title">Temporada Septiembre</h2>
      <ul className="item-list-ul">
        {products.map((product) => (
          <li key={product.id} className="item">
            <img className="item-image" src={product.image} alt={product.name} />
            <div className="item-info">
              <h3 className="item-name">{product.name}</h3>
              <p className="item-description">{product.description}</p>
              <span className="item-price">${product.price}</span>
              <button
                className="item-add-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
