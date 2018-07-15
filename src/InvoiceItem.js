import React from 'react';

function InvoiceItem({ name, price }) {
  return (
    <div>
      {`${name}: ${price} руб.`}
    </div>
  );
}

export default InvoiceItem;
