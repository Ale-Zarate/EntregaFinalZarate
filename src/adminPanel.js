import React, { useState } from 'react';
import productsData from './data'; // Importa la lista de productos
import ProductEditor from './ProductEditor';

const AdminPanel = () => {
  const [products, setProducts] = useState(productsData);

  const updateProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {products.map(product => (
        <ProductEditor
          key={product.id}
          product={product}
          updateProduct={updateProduct}
        />
      ))}
    </div>
  );
}

export default AdminPanel;
