import * as actionTypes from '~/src/constants/actionTypes';

const INITIAL_STATE = {
  hasError: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_ORDER_FAILURE:
      return Object.assign({}, INITIAL_STATE, { hasError: true });
    default:
      return state;
  }
};
