import React from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {

  const {productId} =useParams();
  console.log(productId);
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{productId}</p>
    </section>
  )
}

export default ProductDetail
