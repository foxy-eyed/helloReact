import React from 'react';
import { CartContextConsumer } from '../../../containers/CartProvider';
import Cart from './Cart';

export default () => (
  <CartContextConsumer>
    {({ items, totalCount, totalSum }) => (
      <Cart items={items} totalCount={totalCount()} totalSum={totalSum()} />
    )}
  </CartContextConsumer>
);
