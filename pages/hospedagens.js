import React from 'react'

export default function hospedagens() {
  return (
    <>
  {/* formulário hospedagem */}
  <div className="container-fluid py-5" id="div-form">
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
  <main>
    <div className="d-grid">
      {/* cards hospedagens  */}
      <section id="hospedagens" className="container-fluid py-3 my-3 mx-auto">
        <h1>Hospedagens em alta</h1>
        <div className="row row-cols g-4 py-3">
          <div className="col">
            <div className="card ">
              <img
                src="../../assets/img/hoteis/hotel-5.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,9</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                </div>
                <p>
                  <i className="bi bi-geo-alt" /> nomeLocal
                </p>
                <p className="card-text">Breve descrição do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ Preço</strong>
                </p>
                <a
                  href="em-construcao.html"
                  className=" btn btn-primary d-block"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/img/hoteis/hotel-3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,5</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
                <p>
                  <i className="bi bi-geo-alt" /> nomeLocal
                </p>
                <p className="card-text">Breve descri��o do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ Preço</strong>
                </p>
                <a
                  href="em-construcao.html"
                  className=" btn btn-primary d-block"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/img/hoteis/hotel-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,7</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
                <p>
                  <i className="bi bi-geo-alt" /> nomeLocal
                </p>
                <p className="card-text">Breve descrição do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ Preço</strong>
                </p>
                <a
                  href="em-construcao.html"
                  className=" btn btn-primary d-block"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/img/hoteis/hotel-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,3</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
                <p>
                  <i className="bi bi-geo-alt" /> nomeLocal
                </p>
                <p className="card-text">Breve descrição do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ Preço</strong>
                </p>
                <a
                  href="em-construcao.html"
                  className=" btn btn-primary d-block"
                >
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
