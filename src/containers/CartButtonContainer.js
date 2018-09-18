import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initCart } from '~/src/actions/cart';
import CartButton from '~/src/components/views/Layout/CartButton';

class CartButtonContainer extends Component {
  componentDidMount() {
    const { props } = this;
    props.loadCartContent();
  }

  render() {
    const { totalCount, totalSum } = this.props;
    return <CartButton totalCount={totalCount} totalSum={totalSum} />;
  }
}

const mapStateToProps = (state) => {
  const { items } = state.cart;
  return (
    {
      totalCount: items.reduce((acc, item) => acc + item.quantity, 0),
      totalSum: items.reduce((acc, item) => acc + item.totalPrice, 0),
    }
  );
};

const mapDispatchToProps = dispatch => (
  {
    loadCartContent() {
      dispatch(initCart());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartButtonContainer);
