import React, { Fragment } from 'react';

import Link from '~/src/components/elements/Link';
import { rootPath } from '~/src/helpers/routes';

export default () => (
  <Fragment>
    <h1>
      Sorry!
    </h1>
    <p>
      {'We could not find that page! '}
      <span role="img" aria-label="sad-emoji">
        😔
      </span>
    </p>
    <p>
      {'Try go to '}
      <Link to={rootPath()}>
        home page
      </Link>
      .
    </p>
  </Fragment>
);
