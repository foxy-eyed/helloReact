import React from 'react';
import { Button } from 'reactstrap';

import { productPropType } from '../constants/propTypes';
import { CartContextConsumer } from '../containers/CartProvider';

function ProductAddButton({ product }) {
  return (
    <CartContextConsumer>
      {({ addToCart }) => (
        <Button
          onClick={() => addToCart(product)}
          color="success"
        >
          Add to cart
        </Button>
      )}
    </CartContextConsumer>
  );
}

ProductAddButton.propTypes = {
  product: productPropType.isRequired,
};

export default ProductAddButton;
