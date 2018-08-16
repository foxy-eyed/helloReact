import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { productPropType } from '../../../constants/propTypes';
import Options from './Options';
import ImageGallery from '../../../containers/ImageGallery';
import AddToCartForm from '../../../containers/AddToCartForm';

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
