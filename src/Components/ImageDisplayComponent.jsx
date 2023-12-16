import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageDisplayComponent = () => {
  return (
    <Carousel>
      {/* Repeat this block for each image */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="..\assets\image1.JPG"
          alt="First Step"
        />
        <Carousel.Caption>
          <h3>Step 1: </h3>
          <p>Withing Lethal Company click on the cog</p>
          <p>Go to manage</p>
          <p>Browse Local Files</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* End of block */}
    </Carousel>
  );
};

export default ImageDisplayComponent;
