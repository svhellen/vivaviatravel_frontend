import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'next/image';
import style from '@/styles/Carousel.module.css'

function BsCarouselHome(content) {
  return (
  
    // className="carousel slide carousel-fade"
    // data-bs-ride="carousel"

    <Carousel id={`carousel-principal`} className={`${style.carousel}  carousel-fade`}> 
      <Carousel.Item  id={`item-1`} className={`item`}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption className=" d-block">
            <h3 className=" display-4">Descubra o Mundo</h3>
            <h3 className=" display-4">Abrace a Jornada</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  id={`item-1`} className={`item`}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
        {/* <h3 className=" display-4">Descubra o Mundo</h3> */}
        <h3>Explore novos horizontes e destinos deslumbrantes.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id={`item-1`} className={`item`}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
        {/* <h3 className=" display-4">Descubra o Mundo</h3> */}
        <h3>Viva momentos inesquecíveis em sua jornada pelo mundo.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BsCarouselHome;
