import React from 'react';
import { Navbar } from 'reactstrap';

import Link from '~/src/components/elements/Link';
import CartButtonContainer from '~/src/containers/CartButtonContainer';
import { rootPath } from '~/src/helpers/routes';

export default () => (
  <Navbar light color="light">
    <Link to={rootPath()} className="mb-0 h1 navbar-brand">
      <span>
        <span role="img" aria-label="fruits">
          🍎
        </span>
        Healthy Food Shop
      </span>
    </Link>
    <CartButtonContainer />
  </Navbar>
);
