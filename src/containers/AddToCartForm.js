import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import { productPropType } from '../constants/propTypes';
import { CartContextConsumer } from './CartProvider';

class AddToCartForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product,
      quantity: 1,
    };

    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  handleChangeQuantity(e) {
    const { target } = e;
    this.setState({
      quantity: parseInt(target.value, 10) || 1,
    });
  }

  render() {
    const { product, quantity } = this.state;

    return (
      <CartContextConsumer>
        {({ addToCart }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addToCart(product, quantity);
            }}
          >
            <div className="form-row">
              <FormGroup className="col-md-6">
                <Input
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={this.handleChangeQuantity}
                  required
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Button color="success">
                  Add
                </Button>
              </FormGroup>
            </div>
          </Form>
        )}
      </CartContextConsumer>
    );
  }
}

AddToCartForm.propTypes = {
  product: productPropType.isRequired,
};

export default AddToCartForm;
