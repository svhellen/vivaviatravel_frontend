import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
//import Carousel from "bootstrap";
import style from "@/styles/Home.module.css";


export default function CarouselHome() {
  return (
    <div className={`${style.homeHeader} row`}>
      {/* className={`${style.homeHeader} row`} */}
      <div
        id="carousel-principal"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active " id="item1">
            <div className="carousel-caption d-block">
              <h1 className=" display-3">Descubra o Mundo</h1>
              <h1 className=" display-3">Abrace a Jornada</h1>
            </div>
          </div>
          <div className="carousel-item" id="item2">
            <div className="carousel-caption d-block">
              <h1 className=" display-3">Descubra o Mundo</h1>
              <h1 className=" display-3">Abrace a Jornada</h1>
              {/*<h1 class=" display-3">Descubra destinos deslumbrantes e
							experiências únicas.</h1>*/}
            </div>
          </div>
          <div className="carousel-item" id="item3">
            <div className="carousel-caption d-block">
              <h1 className=" display-3">Descubra o Mundo</h1>
              <h1 className=" display-3">Abrace a Jornada</h1>
              {/*<h1 class=" display-3">Nossos agentes de viagens estão
							prontos para ajudá-lo a encontrar a melhor opção para a sua
							próxima aventura.</h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
