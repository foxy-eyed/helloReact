import request from 'superagent';
import { stringify } from 'qs';
import { isEmpty } from 'lodash/lang';

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  Object.assign({}, action, data, { [API_CALL]: undefined })
);

const APICall = (endpoint, method, query, payload, contentType) => {
  const req = request[method.toLowerCase()](endpoint);

  if (!isEmpty(query)) {
    req.query(stringify(query));
  }

  if (method === 'POST' && !isEmpty(payload)) {
    const reqBody = (contentType === 'form') ? stringify(payload) : payload;
    req
      .type(contentType)
      .send(reqBody);
  }

  return req;
};

export default store => next => (action) => {
  if (!action[API_CALL]) return next(action);

  const {
    endpoint,
    method,
    query,
    payload,
    contentType,
    types,
  } = action[API_CALL];

  const [requestType, successType, failureType] = types;

  store.dispatch(nextAction(action, { type: requestType }));

  const promise = APICall(endpoint, method, query, payload, contentType);

  promise
    .then((response) => {
      store.dispatch(nextAction(action, { type: successType, response }));
    })
    .catch((error) => {
      store.dispatch(nextAction(action, { type: failureType, error }));
    });

  return promise;
};
