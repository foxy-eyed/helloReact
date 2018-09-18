import React, { Fragment } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';

import { orderPath } from '~/src/helpers/routes';
import Link from '~/src/components/elements/Link';
import CartItem from '~/src/components/views/Cart/CartItem';
import CartTotals from '~/src/components/views/Cart/CartTotals';

export default ({ items, totalCount, totalSum }) => (
  <Fragment>
    <Card className="my-4">
      <CardHeader>
        Your shopping cart
      </CardHeader>
      <CardBody>
        {(items.length > 0) ? (
          items.map(product => (
            <CartItem key={`cartItem-${product.id}`} product={product} />
          ))
        ) : (
          <p className="text-muted">
            Cart is empty
          </p>
        )}
      </CardBody>
      <CardFooter>
        <div className="font-weight-bold">
          <CartTotals count={totalCount} sum={totalSum} />
        </div>
      </CardFooter>
    </Card>
    {(totalCount > 0) && (
      <Link to={orderPath()} className="btn btn-outline-primary">
        Submit an Order
      </Link>
    )}
  </Fragment>
);
