import { connect } from 'react-redux';

import Cart from '~/src/components/views/Cart/Cart';

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

export default connect(mapStateToProps)(Cart);
