import { connect } from 'react-redux';

import OrderTable from '~/src/components/views/Order/OrderTable';

const mapStateToProps = (state) => {
  const { items } = state.cart;
  return (
    {
      items,
      totalCount: items.reduce((acc, item) => acc + item.quantity, 0),
      totalSum: items.reduce((acc, item) => acc + item.totalPrice, 0),
    }
  );
};

export default connect(mapStateToProps)(OrderTable);
