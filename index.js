import User from './src/User';

const customer = new User('John', 'Doe', '1990-12-12');

console.log(customer.fullName());
console.log(customer.age());
