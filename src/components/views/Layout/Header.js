import React from 'react';
import { Navbar } from 'reactstrap';

import Link from '../../elements/Link';
import CartButton from './CartButton';
import { rootPath } from '../../../helpers/routes';

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
    <CartButton />
  </Navbar>
);
