import React from 'react';
import { Table } from 'reactstrap';

import OrderItem from '~/src/components/views/Order/OrderItem';
import Price from '~/src/components/elements/Price';

export default ({ items, totalCount, totalSum }) => (
  <Table hover>
    <thead>
      <tr className="table-primary">
        <th>
          Product name
        </th>
        <th>
          Product price
        </th>
        <th>
          Amount
        </th>
        <th>
          Total price
        </th>
      </tr>
    </thead>
    <tbody>
      {items.map(product => (
        <OrderItem key={`orderItem-${product.id}`} product={product} />
      ))}
    </tbody>
    <tfoot>
      <tr className="table-primary">
        <th colSpan="2">
          Totals
        </th>
        <td>
          {totalCount}
        </td>
        <td>
          <Price amount={totalSum} />
        </td>
      </tr>
    </tfoot>
  </Table>
);
