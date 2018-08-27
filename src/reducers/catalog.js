import * as actionTypes from '~/src/constants/actionTypes';

const INITIAL_STATE = {
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.products });
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      console.log(action.error);
      return INITIAL_STATE;
    default:
      return state;
  }
};
