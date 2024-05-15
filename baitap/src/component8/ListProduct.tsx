import React, { useState } from 'react';
import Product from './Product';
import './ListProduct.css'; 

interface ProductData {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ListProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([
    {
      id: 1,
      name: 'Cam sành',
      price: 15000,
      quantity: 10
    },
    {
      id: 2,
      name: 'Táo mỹ',
      price: 20000,
      quantity: 5
    },
    {
      id: 3,
      name: 'Dưa hấu',
      price: 50000,
      quantity: 8
    }
  ]);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
