import React from 'react';
import { Field } from 'redux-form';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from 'reactstrap';

const renderField = ({
  input,
  label,
  type, meta: { touched, error },
}) => (
  <FormGroup row>
    <Label sm={2}>
      {label}
    </Label>
    <Col sm={10}>
      <Input {...input} placeholder={label} type={type} invalid={touched && !!error} />
      {touched && error && (
        <FormFeedback>
          {error}
        </FormFeedback>
      )}
    </Col>
  </FormGroup>
);

export default ({
  handleSubmit,
  pristine,
  reset,
  submitting,
}) => (
  <Form onSubmit={handleSubmit} className="order-form">
    <Field
      name="name"
      type="text"
      component={renderField}
      label="Your name"
    />
    <Field
      name="email"
      type="email"
      component={renderField}
      label="Email"
    />
    <Field
      name="phone"
      type="text"
      component={renderField}
      label="Phone number"
    />
    <Field
      name="address"
      type="textarea"
      component={renderField}
      label="Address"
    />
    <FormGroup row>
      <Col sm={{ size: 10, offset: 2 }}>
        <Button type="button" disabled={pristine || submitting} onClick={reset} outline color="secondary">
          Reset
        </Button>
        <Button type="submit" disabled={submitting} outline color="primary">
          Order
        </Button>
      </Col>
    </FormGroup>
  </Form>
);
