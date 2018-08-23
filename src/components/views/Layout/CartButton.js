import React from 'react';

import { CartContextConsumer } from '~/src/containers/CartProvider';
import CartTotals from '~/src/components/views/Cart/CartTotals';
import Link from '~/src/components/elements/Link';
import { cartPath } from '~/src/helpers/routes';

export default () => (
  <CartContextConsumer>
    {({ totalCount, totalSum }) => (
      <Link to={cartPath()} className="btn btn-outline-primary">
        <span role="img" aria-label="cart">
          🛒
        </span>
        <CartTotals count={totalCount()} sum={totalSum()} />
      </Link>
    )}
  </CartContextConsumer>
);
