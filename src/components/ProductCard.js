import React from 'react';
import { Card, CardBody, CardText, CardImg } from 'reactstrap';

import { productPropType } from '../constants/propTypes';
import Price from './Price';
import TextBox from './TextBox';
import AddProductToCart from '../containers/AddProductToCart';

function ProductCard({ product }) {
  return (
    <Card>
      <CardImg top src={product.imageUrl} alt={product.title} />
      <CardBody>
        <h5>
          <TextBox>
            {product.title}
          </TextBox>
        </h5>
        <CardText>
          <Price amount={product.price} />
        </CardText>
        <AddProductToCart product={product} />
      </CardBody>
    </Card>
  );
}

ProductCard.propTypes = {
  product: productPropType.isRequired,
};

export default ProductCard;
