import { INIT_CART } from '~/src/constants/actionTypes';
import { initCart } from '~/src/actions/cart';

export default store => next => (action) => {
  if (action.type !== INIT_CART) return next(action);
  if (action.isLoaded) return next(action);

  let cartItems = [];
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart) {
      const cart = JSON.parse(serializedCart);
      cartItems = cart.items;
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    store.dispatch(initCart(cartItems, true));
  }
};
