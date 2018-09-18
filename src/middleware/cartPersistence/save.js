import { ADD_TO_CART } from '~/src/constants/actionTypes';

export default store => next => (action) => {
  if (action.type !== ADD_TO_CART) return next(action);

  const nextState = next(action);
  try {
    const state = store.getState();
    const serializedCart = JSON.stringify(state.cart);
    localStorage.setItem('cart', serializedCart);
  } catch (e) {
    console.log(e.message);
  }

  return nextState;
};
