import React from 'react';

import ProductContainer from '../../../containers/ProductContainer';

export default ({ match: { params } }) => (
  <ProductContainer productId={params.id} />
);
