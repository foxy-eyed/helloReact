import React from 'react';

import { productPropType } from '../../../constants/propTypes';
import Price from '../../elements/Price';

const Options = ({ product }) => (
  <dl className="row">
    <dt className="col-sm-6 col-md-3 text-truncate">
      Description
    </dt>
    <dd className="col-sm-6 col-md-9">
      {product.description}
    </dd>
    <dt className="col-sm-6 col-md-3 text-truncate">
      Price
    </dt>
    <dd className="col-sm-6 col-md-9">
      <Price amount={product.price} />
    </dd>
  </dl>
);

Options.propTypes = {
  product: productPropType.isRequired,
};

export default Options;
