import React from 'react'

export default function promocoes() {
  return (
    <>
    <main className="">
  <div className="d-grid">
    {/* cards promocoes  */}
    <section id="promocoes" className="container-fluid py-3 my-3 mx-auto">
      <h1>Pacotes promocionais</h1>
      <div className="row row-cols g-4 py-3">
        <div className="col">
          <div className="card ">
            <img
              src="../../assets/img/hoteis/ex-2.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <span className="balao-promo position-absolute top-0">-25%</span>
              <h5 className="card-title">Pacote para Gramado</h5>
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
                Preço a partir de <strong>R$ 1.230</strong>
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
        </div>
      </div>
    </section>
  </div>
</main>
</>
  )
}
