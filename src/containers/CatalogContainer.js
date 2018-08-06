import React, { Component } from 'react';

import productItems from '../constants/products';
import Catalog from '../components/views/Catalog/Catalog';

class CatalogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: productItems });
  }

  render() {
    const { products } = this.state;
    return (
      <Catalog products={products} />
    );
  }
}

export default CatalogContainer;
