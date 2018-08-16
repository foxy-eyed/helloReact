import React, { Component } from 'react';

import Item from './Item';

class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.pickImageByIndex = this.pickImageByIndex.bind(this);
  }

  pickImageByIndex(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;
    const currentImage = images[currentIndex];
    return (
      <div className="gallery">
        <div className="gallery-full-size-image">
          <img src={currentImage} alt="" />
        </div>
        <div className="gallery-preview-container">
          {images.map((imageUrl, index) => (
            <Item
              key={`preview-${index}`}
              imageUrl={imageUrl}
              index={index}
              handlePreviewClick={this.pickImageByIndex}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
