import * as actionTypes from '~/src/constants/actionTypes';

const addToCart = (product, quantity) => ({
  type: actionTypes.ADD_TO_CART,
  product,
  quantity,
});

export default addToCart;
