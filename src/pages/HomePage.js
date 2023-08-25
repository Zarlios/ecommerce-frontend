import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage.jpg';

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="text-center">
        <img src={ExampleCarouselImage} text="First slide" />
        <Carousel.Caption>
          <h3>Get your favorite toy!</h3>
          <p>Check out our Collectibles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-center">
      <img src={ExampleCarouselImage} text="Second slide" />
        <Carousel.Caption>
          <h3>Buy the best apparel</h3>
          <p>Head over to the apparel section and buy your favorite t-shirt!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-center">
      <img src={ExampleCarouselImage} text="Third slide" />
        <Carousel.Caption>
          <h3>Will you conquer your enemies?</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;