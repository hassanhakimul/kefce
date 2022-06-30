import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import burger from '../../../images/bur.jpg'
const MenuCarro = () => {
    return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img style={{maxHeight:'375px'}}
          className="d-block img-fluid w-100"
          src="https://st4.depositphotos.com/14582236/20173/v/450/depositphotos_201734330-stock-illustration-deluxe-king-size-burger-ads.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{maxHeight:'375px'}}
          className="d-block img-fluid w-100"
          src="https://st4.depositphotos.com/14582236/31212/v/600/depositphotos_312123072-stock-illustration-hot-fried-chicken-burger-banner.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{maxHeight:'375px'}}
          className="d-block img-fluid  w-100"
          src="https://st2.depositphotos.com/2885805/44364/v/600/depositphotos_443646462-stock-illustration-super-burger-horizontal-composition.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{maxHeight:'375px'}}
          className="d-block img-fluid  w-100"
          src={burger}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default MenuCarro;


