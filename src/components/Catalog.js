import React from 'react';
import ProductCard from './ProductCard';

function Catalog({ products }) {
  const catalogItems = products.map(product => (
    <ProductCard key={`productCard-${product.id}`} product={product} />
  ));
  return (
    <div className="card-deck">
      {catalogItems}
    </div>
  );
}

export default Catalog;
