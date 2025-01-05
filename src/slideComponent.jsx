import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from './assetspic/images.jpg'; // the uncontrolled element was referenced as a component but appears to be an image, so you use img tags
import ExampleCarouselImage2 from './assetspic/images-1.jpg';
import ExampleCarouselImage3 from './assetspic/images-2.jpg';
export function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item> 
        <img
          className="d-block w-100"
          src={ExampleCarouselImage3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

  