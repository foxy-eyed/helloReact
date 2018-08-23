import React from 'react';
import { CartContextConsumer } from '~/src/containers/CartProvider';
import Cart from '~/src/components/views/Cart/Cart';

export default () => (
  <CartContextConsumer>
    {({ items, totalCount, totalSum }) => (
      <Cart items={items} totalCount={totalCount()} totalSum={totalSum()} />
    )}
  </CartContextConsumer>
);
