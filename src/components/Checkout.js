import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, removeFromCart }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Función para completar la compra
  const completePurchase = () => {
    setShowPopup(true);
    // Puedes agregar aquí la lógica adicional para completar la compra, como enviar una solicitud al servidor, etc.
  };

  return (
    <div className="checkout">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-items">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="checkout-item">
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="remove-item-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="checkout-total">
          <p>Total:</p>
          <h3>${calculateTotal()}</h3>
        </div>
        <button className="checkout-button" onClick={completePurchase}>
          Complete Purchase
        </button>
        {showPopup && (
          <div className="purchase-popup">
            <p>Gracias por tu compra</p>
            <button onClick={() => setShowPopup(false)}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
