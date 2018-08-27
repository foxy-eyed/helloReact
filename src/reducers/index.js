import { combineReducers } from 'redux';

import cart from '~/src/reducers/cart';
import catalog from '~/src/reducers/catalog';

export default combineReducers({
  cart,
  catalog,
});
