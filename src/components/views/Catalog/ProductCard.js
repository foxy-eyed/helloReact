import React from 'react';
import { Card, CardBody, CardText, CardImg } from 'reactstrap';

import { productPropType } from '~/src/constants/propTypes';
import Price from '~/src/components/elements/Price';
import Link from '~/src/components/elements/Link';
import { productPath } from '~/src/helpers/routes';
import AddToCartForm from '~/src/containers/AddToCartForm';

const ProductCard = ({ product }) => (
  <Card>
    <CardImg top src={product.gallery[0]} alt={product.title} />
    <CardBody>
      <h5>
        <Link
          to={productPath(product.id)}
        >
          {product.title}
        </Link>
      </h5>
      <CardText>
        <Price amount={product.price} />
      </CardText>
      <AddToCartForm product={product} />
    </CardBody>
  </Card>
);

ProductCard.propTypes = {
  product: productPropType.isRequired,
};

export default ProductCard;
