
import React from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { id, name, price, quantity } = product;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
}

export default Product;
