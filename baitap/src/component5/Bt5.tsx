import React from 'react';
import Product from './Product';

interface ProductData {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

const Bt5: React.FC = () => {
  const productData: ProductData = {
    id: 1,
    name: 'Bưởi ba roi',
    price: '12.000',
    quantity: 6
  };

  return (
    <div className="Bt5">
      <Product product={productData} />
    </div>
  );
}

export default Bt5;
