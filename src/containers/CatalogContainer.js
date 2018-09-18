import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchProducts from '~/src/actions/catalog';
import Catalog from '~/src/components/views/Catalog/Catalog';

class CatalogContainer extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <Catalog products={products} />
    );
  }
}

const mapStateToProps = state => (
  {
    products: state.catalog.products,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchProducts() {
      dispatch(fetchProducts());
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogContainer);
