import { reduxForm } from 'redux-form';
import { capitalize } from 'lodash/string';
import { has } from 'lodash/object';

import submitOrder from '~/src/actions/order';
import { clearCart } from '~/src/actions/cart';
import OrderForm from '~/src/components/views/Order/OrderForm';

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PHONE_PATTERN = /^(\+)?(\d)+[\d-\s]{10,}$/;

const checkRequired = (values, required) => {
  const errors = {};
  required.forEach((field) => {
    if (!values[field]) {
      errors[field] = `${capitalize(field)} is required`;
    }
  });
  return errors;
};

const validate = (values) => {
  const required = ['name', 'email', 'phone'];
  const errors = checkRequired(values, required);

  if (!has(errors, 'email') && !EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!has(errors, 'phone') && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = 'Invalid phone number';
  }

  return errors;
};

const submit = (values, dispatch, props) => {
  const { reset } = props;
  dispatch(submitOrder(values)).then(() => {
    dispatch(clearCart());
    reset('order');
  });
};

export default reduxForm({
  form: 'order',
  validate,
  onSubmit: submit,
})(OrderForm);
