import React from 'react';
import { Card, CardBody, CardText, CardImg } from 'reactstrap';

import { productPropType } from '../../../constants/propTypes';
import Price from '../../elements/Price';
import Link from '../../elements/Link';
import { productPath } from '../../../helpers/routes';
import AddToCartForm from '../../../containers/AddToCartForm';

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
