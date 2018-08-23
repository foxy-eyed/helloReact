import React from 'react';

import { cartItemPropType } from '~/src/constants/propTypes';
import Price from '~/src/components/elements/Price';
import TextBox from '~/src/components/elements/TextBox';

const CartItem = ({ product: { title, quantity, totalPrice } }) => (
  <div>
    <TextBox>
      {`${title} × ${quantity} – `}
    </TextBox>
    <Price amount={totalPrice} />
  </div>
);

CartItem.propTypes = {
  product: cartItemPropType.isRequired,
};

export default CartItem;
