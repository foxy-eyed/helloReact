import React from 'react';

import ProductContainer from '~/src/containers/ProductContainer';

export default ({ match: { params } }) => (
  <ProductContainer productId={params.id} />
);
