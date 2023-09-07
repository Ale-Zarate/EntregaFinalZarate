import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ addToCart }) => {
  return (
    <div>
      <ItemList addToCart={addToCart} />
    </div>
  );
}

export default ItemListContainer;
