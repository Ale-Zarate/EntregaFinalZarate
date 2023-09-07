import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Navbar />
      <CartWidget cartCount={cartItems.length} />
      <ItemListContainer addToCart={addToCart} />
      <ItemDetailContainer addToCart={addToCart} />
      <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;

