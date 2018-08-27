import { connect } from 'react-redux';

import CartButton from '~/src/components/views/Layout/CartButton';

const mapStateToProps = (state) => {
  const { items } = state.cart;
  return (
    {
      totalCount: items.reduce((acc, item) => acc + item.quantity, 0),
      totalSum: items.reduce((acc, item) => acc + item.totalPrice, 0),
    }
  );
};

export default connect(mapStateToProps)(CartButton);
