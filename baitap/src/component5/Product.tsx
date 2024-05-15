import React from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    quantity: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { id, name, price, quantity } = product;

  return (
    <div>
      <h2>Dữ liệu trong component con</h2>
      <p>Id: {id}</p>
      <p>Product name: {name}</p>
      <p>Price: {price} ₫</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default Product;
