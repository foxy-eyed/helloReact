import * as actionTypes from '~/src/constants/actionTypes';
import parseProducts from '~/src/helpers/productsParser';

const INITIAL_STATE = {
  products: [],
  hasError: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS: {
      const products = parseProducts(action.response);
      return Object.assign({}, INITIAL_STATE, { products });
    }
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return Object.assign({}, INITIAL_STATE, { hasError: true });
    default:
      return state;
  }
};
