import { createStore, applyMiddleware } from 'redux';

import cartPersistence from '~/src/middleware/cartPersistence/';
import apiAuthMiddleware from '~/src/middleware/authAPI';
import apiMiddleware from '~/src/middleware/API';
import reducers from '~/src/reducers';

const middleware = [...cartPersistence, apiAuthMiddleware, apiMiddleware];
const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

export default store;
