import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { productPropType } from '~/src/constants/propTypes';
import Options from '~/src/components/views/Product/Options';
import ImageGallery from '~/src/containers/ImageGallery';
import AddToCartForm from '~/src/containers/AddToCartForm';

const DetailedView = ({ product }) => (
  <Fragment>
    <h1>
      {product.title}
    </h1>
    <Row>
      <Col>
        <ImageGallery images={product.gallery} />
      </Col>
      <Col>
        <Options product={product} />
        <AddToCartForm product={product} />
      </Col>
    </Row>
  </Fragment>
);

DetailedView.propTypes = {
  product: productPropType.isRequired,
};

export default DetailedView;
