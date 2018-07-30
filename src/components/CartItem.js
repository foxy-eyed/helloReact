import React from 'react';

import { cartItemPropType } from '../constants/propTypes';
import Price from './Price';
import TextBox from './TextBox';

function CartItem({ product: { title, quantity, totalPrice } }) {
  return (
    <div>
      <TextBox>
        {`${title} × ${quantity} – `}
      </TextBox>
      <Price amount={totalPrice} />
    </div>
  );
}

CartItem.propTypes = {
  product: cartItemPropType.isRequired,
};

export default CartItem;
