import React, { Component } from 'react';

import getProducts from '~/src/api';
import Catalog from '~/src/components/views/Catalog/Catalog';

class CatalogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    getProducts().then(products => this.setState({ products }));
  }

  render() {
    const { products } = this.state;
    return (
      <Catalog products={products} />
    );
  }
}

export default CatalogContainer;
