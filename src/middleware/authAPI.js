import { API_CALL } from '~/src/middleware/API';
import { contentful } from '~/src/constants/credentials';

export default () => next => (action) => {
  const apiCall = action[API_CALL];

  if (apiCall && (apiCall.endpoint === contentful.endpoint)) {
    apiCall.query = Object.assign({}, apiCall.query, {
      access_token: contentful.token,
    });
  }
  return next(action);
};
