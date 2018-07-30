import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';

function CartTotals({ count, sum }) {
  return (
    <div className="font-weight-bold">
      {`Total ${count} items – `}
      <Price amount={sum} />
    </div>
  );
}

CartTotals.propTypes = {
  count: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default CartTotals;
