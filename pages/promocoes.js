import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Promocoes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Faz a chamada para a API simulada ao carregar a página
    fetch("/api/fakeData")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <>
      {/* <main className=""> */}
      <div className="d-grid">
        {/* cards promocoes  */}
        <section id="promocoes" className="container-fluid py-3 my-3 mx-auto">
          <h1>Pacotes promocionais</h1>
          {data && (
            <div className="row row-cols g-4 py-3">
              {data.promocoes.map((promocao) => (
                <div key={promocao.id} className="col">
                  <div className="card ">
                    <Image
                      src={promocao.imgSrc}
                      className="img-fluid rounded-start"
                      width={500}
                      height={300}
                      alt="..."
                      // layout="responsive"
                      // objectFit="cover"
                    />
                    <div className="card-body">
                      <span className="balao-promo position-absolute top-0">
                        -{promocao.percentPromo}%
                      </span>
                      <h5 className="card-title">
                        Pacote para {promocao.passagem.destino}
                      </h5>
                      <div className="pb-3"></div>
                      <p>
                        <i className="bi bi-airplane" />
                        Voo direto {promocao.passagem.origem}
                        <i className="bi bi-arrow-left-right mx-3" />
                        {promocao.passagem.destino}
                      </p>
                      <p>
                        <i className="bi bi-building" /> Hotel{" "}
                        {promocao.hospedagem.nomeHotel}
                      </p>
                      <p className="card-text">
                        {promocao.hospedagem.descricao}
                      </p>
                      <p>
                        Preço a partir de{" "}
                        <strong>
                          R$ 
                          {2 *
                            (promocao.hospedagem.preco +
                              promocao.passagem.preco) -
                            promocao.percentPromo}
                        </strong>
                      </p>
                      <a href="#detalhes" className=" btn btn-primary d-block">
                        Ver detalhes
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* <div className="col">
          <div className="card ">
            <img
              src="../../assets/img/hoteis/ex-6.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <span className="balao-promo position-absolute top-0">-10%</span>
              <h5 className="card-title">Pacote para São Paulo</h5>
              <div className="pb-3"></div>
              <p>
                <i className="bi bi-airplane" />
                Voo direto Origem <i className="bi bi-arrow-left-right" />{" "}
                Destino
              </p>
              <p>
                <i className="bi bi-building" /> Hotel nomeHotel
              </p>
              <p className="card-text">Breve descrição do hotel.</p>
              <p>
                Preço a partir de <strong>R$ 1540</strong>
              </p>
              <a href="em-construcao.html" className=" btn btn-primary d-block">
                Ver detalhes
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img
              src="../../assets/img/hoteis/ex-7.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <span className="balao-promo position-absolute top-0">-20%</span>
              <h5 className="card-title">Pacote para Manaus</h5>
              <div className="pb-3"></div>
              <p>
                <i className="bi bi-airplane" />
                Voo direto Origem <i className="bi bi-arrow-left-right" />{" "}
                Destino
              </p>
              <p>
                <i className="bi bi-building" /> Hotel nomeHotel
              </p>
              <p className="card-text">Breve descrição do hotel.</p>
              <p>
                Preço a partir de <strong>R$ 970</strong>
              </p>
              <a href="em-construcao.html" className=" btn btn-primary d-block">
                Ver detalhes
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img
              src="../../assets/img/hoteis/hotel-5.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <span className="balao-promo position-absolute top-0">-5%</span>
              <h5 className="card-title">Pacote para Recife</h5>
              <div className="pb-3"></div>
              <p>
                <i className="bi bi-airplane" />
                Voo direto Origem <i className="bi bi-arrow-left-right" />{" "}
                Destino
              </p>
              <p>
                <i className="bi bi-building" /> Hotel nomeHotel
              </p>
              <p className="card-text">Breve descrição do hotel.</p>
              <p>
                Preço a partir de <strong>R$ 1640</strong>
              </p>
              <a href="em-construcao.html" className=" btn btn-primary d-block">
                Ver detalhes
              </a>
            </div>
          </div>
        </div> */}
          {/* </div> */}
        </section>
      </div>
      {/* </main> */}
    </>
  );
}
