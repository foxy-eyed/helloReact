import React, { Fragment } from 'react';

import OrderContainer from '~/src/containers/Order/OrderContainer';
import OrderFormContainer from '~/src/containers/Order/OrderFormContainer';

export default () => (
  <Fragment>
    <h1>
      Order
    </h1>
    <div>
      <h3>
        #1 Check your order:
      </h3>
      <OrderContainer />
      <h3>
        #2 Fill in your contact info:
      </h3>
      <OrderFormContainer />
    </div>
  </Fragment>
);
