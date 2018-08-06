import React from 'react';

import { cartItemPropType } from '../../../constants/propTypes';
import Price from '../../elements/Price';
import TextBox from '../../elements/TextBox';

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
