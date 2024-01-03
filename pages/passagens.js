import React from 'react'

export default function passagens() {
  return (
    <>
  <header className="row">
    {/* navbar */}
    </header>
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
          <select className="form-select" aria-label="Default select example">
            <option selected="">Econômica</option>
            <option value={1}>Econômica premium</option>
            <option value={2}>Executiva</option>
            <option value={3}>Executiva premium</option>
            <option value={4}>Primeira classe</option>
            <option value={5}>Primeira classe premium</option>
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
  <main className="">
    <div className="d-grid">
      {/* cards passagens  */}
      <section id="passagens" className="container-fluid py-3 my-3 mx-auto">
        <h1>Passagens</h1>
        <div className="row row-cols g-4 py-3">
          <div className="col">
            <div className="card ">
              <img
                src="/images/cidades/porto-seguro-ba.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Passagem para Porto Seguro</h5>
                <p className="card-subtitle">Classe: Econômica</p>
                <p>
                  <i className="bi bi-airplane" /> Saindo de Sâo Paulo{" "}
                </p>
                <p>
                  <i className="bi bi-airplane" /> Para Porto Seguro
                </p>
              </div>
              <div className="card-footer">
                <p>
                  Preço a partir de <strong>R$ 380</strong>
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
            <div className="card ">
              <img
                src="/images/hoteis/ex-3.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Passagem para Fortaleza</h5>
                <p className="card-subtitle">Classe: Primeira classe</p>
                <p>
                  <i className="bi bi-airplane" /> Saindo de São Paulo{" "}
                </p>
                <p>
                  <i className="bi bi-airplane" /> Para Fortaleza
                </p>
              </div>
              <div className="card-footer">
                <p>
                  Preço a partir de <strong>R$ 560</strong>
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
            <div className="card ">
              <img
                src="/images/hoteis/ex-2.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Passagem para Rio de Janeiro</h5>
                <p className="card-subtitle">Classe: Econômica</p>
                <p>
                  <i className="bi bi-airplane" /> Saindo de São Paulo{" "}
                </p>
                <p>
                  <i className="bi bi-airplane" /> Para Rio de Janeiro
                </p>
              </div>
              <div className="card-footer">
                <p>
                  Preço a partir de <strong>R$ 350</strong>
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
            <div className="card ">
              <img
                src="/images/cidades/bh-mg.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Passagem para Belo horizonte</h5>
                <p className="card-subtitle">Classe: Econômica</p>
                <p>
                  <i className="bi bi-airplane" /> Saindo de São Paulo{" "}
                </p>
                <p>
                  <i className="bi bi-airplane" /> Para Belo Horizonte
                </p>
              </div>
              <div className="card-footer">
                <p>
                  Preço a partir de <strong>R$ 430</strong>
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
