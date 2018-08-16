import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const { index, handlePreviewClick } = this.props;
    handlePreviewClick(index);
  }

  render() {
    const { imageUrl } = this.props;
    return (
      <a href="#" onClick={this.handleClick}>
        <img src={imageUrl} alt="" />
      </a>
    );
  }
}

export default Item;
