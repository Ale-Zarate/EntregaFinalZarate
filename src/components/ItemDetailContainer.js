import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ addToCart }) => {
  return (
    <div>
      <ItemDetail addToCart={addToCart} />
    </div>
  );
}

export default ItemDetailContainer;
