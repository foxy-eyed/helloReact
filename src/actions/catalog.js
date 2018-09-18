import * as actionTypes from '~/src/constants/actionTypes';
import { API_CALL } from '~/src/middleware/API';
import { contentful } from '~/src/constants/credentials';

const fetchProducts = () => ({
  [API_CALL]: {
    endpoint: contentful.endpoint,
    method: 'GET',
    query: {
      content_type: 'product',
    },
    types: [
      actionTypes.FETCH_PRODUCTS_REQUEST,
      actionTypes.FETCH_PRODUCTS_SUCCESS,
      actionTypes.FETCH_PRODUCTS_FAILURE,
    ],
  },
});

export default fetchProducts;
