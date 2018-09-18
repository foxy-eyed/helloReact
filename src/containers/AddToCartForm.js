import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import { productPropType } from '~/src/constants/propTypes';
import { addToCart } from '~/src/actions/cart';

class AddToCartForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { quantity } = this.state;
    const { product, handleSubmit } = this.props;

    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(product, quantity);
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
    );
  }
}

AddToCartForm.propTypes = {
  product: productPropType.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    handleSubmit(product, quantity) {
      dispatch(addToCart(product, quantity));
    },
  }
);

export default connect(null, mapDispatchToProps)(AddToCartForm);
