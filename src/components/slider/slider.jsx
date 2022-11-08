import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Hero from "../hero/Hero.jsx"
import "./slider.css"

export default function slider() {
  return (
    <div>
    <Hero />
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 slider-img img-responsive"
        src="https://picsum.photos/1500"
        alt="First slide"
      />
        {/* <Carousel.Caption className="cap">
          <Hero />
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider-img img-responsive"
        src="https://picsum.photos/1500"
        alt="Second slide"
      />
{/* 
      <Carousel.Caption className="cap">
          <Hero />
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slider-img img-responsive"
        src="https://picsum.photos/1000"
        alt="Third slide"
      />

        {/* <Carousel.Caption>
         <Hero />
          
      </Carousel.Caption> */}
    </Carousel.Item>
      </Carousel>
      </div>
  )
}
