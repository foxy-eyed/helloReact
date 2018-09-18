import { CLEAR_CART } from '~/src/constants/actionTypes';

export default store => next => (action) => {
  if (action.type !== CLEAR_CART) return next(action);

  try {
    localStorage.removeItem('cart');
  } catch (e) {
    console.log(e.message);
  }
  return next(action);
};
