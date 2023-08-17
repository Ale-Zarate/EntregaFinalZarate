import React from 'react';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartWidget />
      <ItemListContainer />
      <ItemDetailContainer />
      <Checkout />
    </div>
  );
}

export default App;
