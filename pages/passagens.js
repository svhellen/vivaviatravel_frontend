import React, { useEffect, useState } from "react";
//import Image from "next/image";
import { Image } from "react-bootstrap";
import Head from "next/head";
import axios from "axios";

export default function Passagens() {
  const [passagens, setPassagens] = useState([]);

  useEffect(() => {
      //get all tickets from api
      axios
      .get("https://vivaviatravel.somee.com/api/Passagem")
      .then((response) => {
          setPassagens(response.data);
  })
  .catch((error) => {
      console.error("Erro ao buscar a lista de passagens: ", error);
  });
}, []);

  return (
    <>
      <Head>
        <title>VivaVia Travel - Passagens</title>
      </Head>
      {/* formulário hospedagem */}
      <div className="container-fluid  py-5" id="div-form">
        <form className="d-grid gap-4 mx-auto p-3">
          <h4>Passagens</h4>
          <div className="row">
            <div className="col">
              <label htmlFor="f-origem">Origem</label>
              <input
                type="text"
                className="form-control"
                id="f-destino"
                placeholder="De onde?"
              />
            </div>
            <div className="col">
              <label htmlFor="f-destino">Destino</label>
              <input
                type="email"
                className="form-control"
                id="f-destino"
                placeholder="Para onde?"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="data-ida">Data ida</label>
              <input type="date" className="form-control" id="f-ida" />
            </div>
            <div className="col">
              <label htmlFor="data-volta">Data volta</label>
              <input type="date" className="form-control" id="f-volta" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="f-classe">Classe</label>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={1}
              >
                <option value={1}>Econômica</option>
                <option value={2}>Econômica premium</option>
                <option value={3}>Executiva</option>
                <option value={4}>Executiva premium</option>
                <option value={5}>Primeira classe</option>
                <option value={6}>Primeira classe premium</option>
              </select>
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
          {/* cards passagens  */}
          <section id="passagens" className="container-fluid py-3 my-3 mx-auto">
            <h1>Passagens</h1>
            
              <div className="row row-cols g-4 py-3">
                {passagens.map((passagem) => (
                  <div key={passagem.passagemId} className="col">
                    <div className="card ">
                      <Image
                        src={passagem.imagemUrl}
                        fluid
                        alt="..."
                      />
                      
                      <div className="card-body">
                        <h5 className="card-title">
                          Passagem para {passagem.destino}
                        </h5>
                        <p className="card-subtitle">Classe: {passagem.classe}</p>
                        <p>
                          <i className="bi bi-airplane" /> Saindo de {passagem.origem}
                        </p>
                        <p>
                          <i className="bi bi-airplane" /> Para {passagem.destino}
                        </p>
                      </div>
                      <div className="card-footer">
                        <p>
                          Preço a partir de <strong>R$ {passagem.preco}</strong>
                        </p>
                        <a
                          href="#detalhes"
                          className=" btn btn-primary d-block"
                        >
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
}
