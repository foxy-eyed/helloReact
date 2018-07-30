import React, { Component } from 'react';

import productItems from '../constants/products';
import { CartProvider } from './CartProvider';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Catalog from '../components/Catalog';
import Cart from '../components/Cart';

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
      <CartProvider>
        <Sidebar>
          <Cart />
        </Sidebar>
        <Main>
          <h1>
            Products
          </h1>
          <Catalog products={products} />
        </Main>
      </CartProvider>
    );
  }
}

export default CatalogPage;
