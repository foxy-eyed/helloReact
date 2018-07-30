import React from 'react';
import PropTypes from 'prop-types';

function Price({ amount }) {
  return (
    <span className="price">
      {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount)}
    </span>
  );
}

Price.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Price;
