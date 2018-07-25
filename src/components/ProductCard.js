import React from 'react';
import Image from './Image';
import Price from './Price';
import TextBox from './TextBox';

function ProductCard({ product }) {
  return (
    <div className="card">
      <Image src={product.imageUrl} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h5>
          <TextBox>
            {product.title}
          </TextBox>
        </h5>
        <div className="card-text">
          <Price amount={product.price} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
