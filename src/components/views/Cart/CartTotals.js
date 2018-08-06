import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Price from '../../elements/Price';

const CartTotals = ({ count, sum }) => (
  <Fragment>
    {`Total ${count} items – `}
    <Price amount={sum} />
  </Fragment>
);

CartTotals.propTypes = {
  count: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default CartTotals;
