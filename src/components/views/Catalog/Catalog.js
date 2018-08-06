import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';

import { productPropType } from '../../../constants/propTypes';
import ProductCard from '../../shared/ProductCard';

const Catalog = ({ products }) => (
  <CardDeck>
    {products.map(product => (
      <ProductCard key={`productCard-${product.id}`} product={product} />
    ))}
  </CardDeck>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(productPropType).isRequired,
};

export default Catalog;
