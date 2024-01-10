import axios from "axios";
//import Image from "next/image";
import { Image } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";

const Hospedagens = () => {
  
  const [hospedagens, setHospedagens] = useState([]);

  useEffect(() => {
      //get all tickets from api
      axios
      .get("http://vivaviatravel.somee.com/api/Hospedagem")
      .then((response) => {
          setHospedagens(response.data);
  })
  .catch((error) => {
      console.error("Erro ao buscar a lista de hospedagens: ", error);
  });
}, []);

  return (
    <>
      {/* formulário hospedagem */}
      <div className="div-form container-fluid py-5" >
        <form className="d-grid gap-4 mx-auto p-3">
          <h4>Hospedagens</h4>
          <div className="">
            <label htmlFor="f-destino">Destino</label>
            <input
              type="text"
              className="form-control"
              id="f-destino"
              placeholder="Para onde vai?"
              required=""
            />
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="data-check-in">Data check-in</label>
              <input
                type="date"
                className="form-control"
                id="f-check-in"
                required=""
              />
            </div>
            <div className="col">
              <label htmlFor="data-check-out">Data check-out</label>
              <input type="date" className="form-control" id="f-check-out" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="f-bedrooms">Quartos</label>
              <input
                type="number"
                min={1}
                max={4}
                defaultValue={1}
                className="form-control"
                id="f-bedrooms"
              />
            </div>
            <div className="col">
              <label htmlFor="f-adults">Adultos</label>
              <input
                type="number"
                min={1}
                max={8}
                defaultValue={1}
                className="form-control"
                id="f-adults"
              />
            </div>
            <div className="col">
              <label htmlFor="f-kids">Crianças</label>
              <input
                type="number"
                min={0}
                max={16}
                defaultValue={0}
                className="form-control"
                id="f-kids"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </form>
      </div>
        <div className="d-grid">
          {/* cards hospedagens  */}
          <section
            id="hospedagens"
            className="container-fluid py-3 my-3 mx-auto"
          >
            <h1>Hospedagens em alta</h1>
            
              <div className="row row-cols g-4 py-3">
                {hospedagens.map((hospedagem) => (
                  <div key={hospedagem.hospedagemId} className="col">
                    <div className="card ">
                      <Image
                        src={hospedagem.imagemUrl}
                        className="card-img-top"
                        width={300} 
                        height={300} 
                        // alt="..."
                        // layout="responsive"
                        // objectFit="cover" 
                      />
                      <div className="card-body">
                        <h5 className="card-title">{hospedagem.nomeHotel}</h5>
                        <div className="pb-3">
                          <div className="rate">{hospedagem.avaliacao}</div>
                          <div className="d-inline">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-geo-alt" />
                          {hospedagem.localizacao}
                        </p>
                        <p className="card-text">{hospedagem.descricao}</p>
                        <p>
                          Preço a partir de{" "}
                          <strong>R$ {hospedagem.precoDiaria}</strong>
                        </p>
                        <a href="#detalhes" className=" btn btn-primary d-block">
                          Ver detalhes
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           
          </section>
        </div>
    </>
  );
};

export default Hospedagens;
