import React from 'react';
import ReactDOM from 'react-dom';
import User from './src/User';
import Hello from './src/Hello';

const customer = new User('John', 'Doe', '1990-12-12');

ReactDOM.render(<Hello userName={customer.fullName()} />, document.querySelector('#app'));
