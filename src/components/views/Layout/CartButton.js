import React from 'react';

import { CartContextConsumer } from '../../../containers/CartProvider';
import CartTotals from '../Cart/CartTotals';
import Link from '../../elements/Link';
import { cartPath } from '../../../helpers/routes';

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
