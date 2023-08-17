import React, { useState } from 'react';

const ProductEditor = ({ product, updateProduct }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const saveChanges = () => {
    updateProduct(product.id, editedProduct);
  };

  return (
    <div className="product-editor">
      <h3>Edit Product: {product.name}</h3>
      <input
        type="number"
        name="price"
        value={editedProduct.price}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="quantity"
        value={editedProduct.quantity}
        onChange={handleInputChange}
      />
      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
}

export default ProductEditor;
