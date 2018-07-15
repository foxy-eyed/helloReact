import React, { Component } from 'react';

class InvoiceItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', price: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const itemData = this.state;
    const { handleInvoiceItem } = this.props;

    handleInvoiceItem(itemData);
  }

  handleInputChange(e) {
    const { target } = e;

    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { name, price } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>
          Добавить позицию
        </h2>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Наименование"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <input
            name="price"
            type="number"
            placeholder="Цена"
            value={price}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">
            Добавить
          </button>
        </div>
      </form>
    );
  }
}

export default InvoiceItemForm;
