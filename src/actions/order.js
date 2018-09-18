import * as actionTypes from '~/src/constants/actionTypes';
import { API_CALL } from '~/src/middleware/API';
import { googleSpreadsheet } from '~/src/constants/credentials';

const submitOrder = orderForm => ({
  [API_CALL]: {
    endpoint: googleSpreadsheet.endpoint,
    method: 'POST',
    payload: orderForm,
    contentType: 'form', // helps to avoid CORS issues with google spreadsheets
    types: [
      actionTypes.SUBMIT_ORDER_REQUEST,
      actionTypes.SUBMIT_ORDER_SUCCESS,
      actionTypes.SUBMIT_ORDER_FAILURE,
    ],
  },
});

export default submitOrder;
