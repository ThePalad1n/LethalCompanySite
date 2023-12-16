import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageDisplayComponent = () => {
  return (
    <Carousel>
      {/* Repeat this block for each image */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Description of the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* End of block */}
    </Carousel>
  );
};

export default ImageDisplayComponent;
