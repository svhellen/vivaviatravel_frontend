import React from 'react'

export default function destinos() {
  return (
    <>
  {/* formulário destino */}
  <div className="container-fluid  py-5" id="div-form">
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
  </div>
  <main className="">
    <div className="d-grid">
      {/* cards destinos  */}
      <section id="destinos" className="container-fluid py-3 my-3 mx-auto">
        <h1>Destinos em alta</h1>
        <div className="row row-cols g-2 py-3">
          <div className="col col-lg-6">
            <div className="card text-bg-dark">
              <img
                src="../../assets/img/cidades/rio-rj.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h4 className="card-title">Rio de Janeiro</h4>
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="card text-bg-dark ">
              <img
                src="../../assets/img/cidades/porto-seguro-ba.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h4 className="card-title">Porto seguro</h4>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="card text-bg-dark">
              <img
                src="../../assets/img/cidades/recife-pe.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h4 className="card-title">Recife</h4>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="card text-bg-dark">
              <img
                src="../../assets/img/cidades/bh-mg.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h4 className="card-title">Belo Horizonte</h4>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="card text-bg-dark">
              <img
                src="../../assets/img/cidades/sp.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h4 className="card-title">São Paulo</h4>
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
