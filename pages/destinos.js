import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Destinos() {

  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
      
      axios
      .get("http://vivaviatravel.somee.com/api/Destino")
      .then((response) => {
          setDestinos(response.data);
  })
  .catch((error) => {
      console.error("Erro ao buscar a lista de destinos: ", error);
  });
}, []);
  
  return (
    <>
      {/* formulário destino */}
      <form className="container-fluid  py-5" id="div-form">
        <div className="row gap-2 mx-auto p-3" style={{ maxWidth: 650 }}>
          <div className="col ">
            <input
              type="text"
              className="form-control"
              id="f-destino"
              placeholder="Digite o nome do lugar "
            />
          </div>
          <button type="submit" className="btn btn-primary col-3">
            Buscar
          </button>
        </div>
      </form>
        <div className="d-grid">
          {/* cards destinos  */}
          <section id="destinos" className="container-fluid py-3 my-3 mx-auto">
            <h1>Destinos em alta</h1>
              <div className="row row-cols g-2 py-3">
                {destinos.map((destino) => (
                  <div key={destino.destinoId} className="col col-lg-6">
                    <div className="card text-bg-dark">
                      <Image
                        src={destino.imagemUrl}
                        className="card-img"
                        sizes="100%"
                        
                        width={500}
                        height={300}

                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                      <div className="card-img-overlay">
                        <h4 className="card-title">{destino.cidade}</h4>
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
