import React from 'react';

function Price({ amount }) {
  return (
    <span className="price">
      {`Price: ${new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount)}`}
    </span>
  );
}

export default Price;
