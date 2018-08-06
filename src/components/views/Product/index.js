import React, { Fragment } from 'react';
import { find } from 'lodash/collection';
import { Row, Col } from 'reactstrap';

import productItems from '../../../constants/products';
import ProductCard from '../../shared/ProductCard';

export default ({ match: { params } }) => {
  const product = find(productItems, item => item.id === parseInt(params.id, 10));

  return (
    <Fragment>
      <h1>
        {product.title}
      </h1>
      <Row>
        <Col md="6">
          <ProductCard product={product} />
        </Col>
      </Row>
    </Fragment>
  );
};
