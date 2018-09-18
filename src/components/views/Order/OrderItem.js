import React from 'react';

import Price from '~/src/components/elements/Price';

export default ({
  product: {
    title,
    price,
    quantity,
    totalPrice,
  },
}) => (
  <tr>
    <td>
      {title}
    </td>
    <td>
      <Price amount={price} />
    </td>
    <td>
      {quantity}
    </td>
    <td>
      <Price amount={totalPrice} />
    </td>
  </tr>
);
