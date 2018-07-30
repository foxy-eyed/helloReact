import React, { Component, createContext } from 'react';
import { findIndex } from 'lodash/array';

const CartContext = createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addToCart = this.addToCart.bind(this);
    this.totalCount = this.totalCount.bind(this);
    this.totalSum = this.totalSum.bind(this);
  }

  addToCart(product, quantity = 1) {
    const { items } = this.state;
    const itemPosition = findIndex(items, item => item.id === product.id);
    const addedItem = Object.assign({ quantity, totalPrice: product.price * quantity }, product);
    const updatedItems = [...items];

    if (itemPosition !== -1) {
      addedItem.quantity += updatedItems[itemPosition].quantity;
      addedItem.totalPrice += updatedItems[itemPosition].totalPrice;
      updatedItems.splice(itemPosition, 1, addedItem);
    } else {
      updatedItems.push(addedItem);
    }

    this.setState({ items: updatedItems });
  }

  totalCount() {
    const { items } = this.state;
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }

  totalSum() {
    const { items } = this.state;
    return items.reduce((acc, item) => acc + item.totalPrice, 0);
  }

  render() {
    const { children } = this.props;
    const { items } = this.state;
    return (
      <CartContext.Provider value={{
        items,
        totalCount: this.totalCount,
        totalSum: this.totalSum,
        addToCart: this.addToCart,
      }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}

export const CartContextConsumer = CartContext.Consumer;
