import React, { Component } from 'react';
import Catalog from '../components/Catalog';
import productItems from '../constants/Products';

class CatalogPage extends Component {
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
      <div className="catalog">
        <h1>
          Products
        </h1>
        <Catalog products={products} />
      </div>
    );
  }
}

export default CatalogPage;
