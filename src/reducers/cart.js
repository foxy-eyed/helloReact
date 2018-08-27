import { findIndex } from 'lodash/array';

import * as actionTypes from '~/src/constants/actionTypes';

const INITIAL_STATE = {
  items: [],
};

const addProductToCart = (cartContent, product, quantity) => {
  const items = cartContent;
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
  return updatedItems;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return { items: addProductToCart(state.items, action.product, action.quantity) };
    default:
      return state;
  }
};
