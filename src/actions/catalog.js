import getProducts from '~/src/api';
import * as actionTypes from '~/src/constants/actionTypes';

const fetchProductsSuccess = products => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  products,
});

const fetchProductsFailure = error => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  error,
});

const fetchProductsRequest = () => (dispatch) => {
  getProducts().then(
    (products) => {
      dispatch(fetchProductsSuccess(products));
    },
    (error) => {
      dispatch(fetchProductsFailure(error));
    },
  );
};

export default fetchProductsRequest;
