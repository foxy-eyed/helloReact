import React, { Component } from 'react';
import InvoiceItem from './InvoiceItem';
import InvoiceItemForm from './InvoiceItemForm';

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      count: 0,
      sum: 0,
    };

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const { goods } = this.props;
      goods.forEach(good => this.addItem(good));
    }, 1000);
  }

  addItem(item) {
    const { items, count, sum } = this.state;
    this.setState({ items: [...items, item], count: count + 1, sum: sum + item.price });
  }

  render() {
    const { items, count, sum } = this.state;
    const rows = items.map(item => (
      <InvoiceItem key={item.name} name={item.name} price={item.price} />
    ));

    return (
      <div>
        <div className="invoice">
          <h1>
            Кассовый чек
          </h1>
          <div className="invoice-items">
            {rows}
          </div>
          <div className="invoice-totals">
            <p>
              {`Количество: ${count}`}
            </p>
            <p>
              {`Сумма: ${sum}`}
            </p>
          </div>
        </div>
        <InvoiceItemForm handleInvoiceItem={this.addItem} />
      </div>
    );
  }
}

export default Invoice;
