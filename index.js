import React from 'react';
import ReactDOM from 'react-dom';
import User from './src/User';
import Invoice from './src/Invoice';
import Hello from './src/Hello';

const customer = new User('John', 'Doe', '1990-12-12');
const goods = [
  { name: 'apple', price: 5 },
  { name: 'orange', price: 4 },
  { name: 'tomato', price: 3 },
];

ReactDOM.render(
  <div>
    <Hello userName={customer.fullName()} />
    <Invoice goods={goods} />
  </div>,
  document.querySelector('#app'),
);
