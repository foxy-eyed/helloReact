import * as actionTypes from '~/src/constants/actionTypes';

export const initCart = (items = [], isLoaded = false) => ({
  type: actionTypes.INIT_CART,
  items,
  isLoaded,
});

export const addToCart = (product, quantity) => ({
  type: actionTypes.ADD_TO_CART,
  product,
  quantity,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});
