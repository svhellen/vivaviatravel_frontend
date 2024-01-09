import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Destinos() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/fakeData")
      .then((response) => response.json())
      .then((respondeData) => setData(respondeData));
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
            {data && (
              <div className="row row-cols g-2 py-3">
                {data.destinos.map((destino) => (
                  <div key={destino.id} className="col col-lg-6">
                    <div className="card text-bg-dark">
                      <Image
                        src={destino.imgSrc}
                        className="card-img"
                        width={500} 
                        height={300} 
                        alt="..."
                        layout="responsive"
                        objectFit="cover" 
                      />
                      <div className="card-img-overlay">
                        <h4 className="card-title">{destino.cidade}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
    </>
  );
}
