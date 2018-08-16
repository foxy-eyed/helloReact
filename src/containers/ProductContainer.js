import React, { Component } from 'react';
import { find } from 'lodash/collection';
import { isEmpty } from 'lodash/lang';

import getProducts from '../api';
import DetailedView from '../components/views/Product/DetailedView';


class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { productId } = this.props;

    getProducts()
      .then(products => find(products, product => product.id === parseInt(productId, 10)))
      .then(product => this.setState({ product }));
  }

  render() {
    const { product } = this.state;
    return isEmpty(product) ? 'Loading' : <DetailedView product={product} />
  }
}

export default ProductContainer;
