import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from '~/src/reducers/cart';
import catalog from '~/src/reducers/catalog';
import order from '~/src/reducers/order';

export default combineReducers({
  cart,
  catalog,
  order,
  form: formReducer,
});
