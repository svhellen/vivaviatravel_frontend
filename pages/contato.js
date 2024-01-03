import React from "react";

export default function contato() {
  return (
    <>
      <div class=" bg-body-secondary sitePrincipal">
        {/* formulário contato */}
        <div className="container-fluid py-5 m-0" id="div-form-contato">
          <form className="d-grid gap-4 mx-auto p-3">
            <div>
              <h1 style={{ fontSize: "1.3em" }}>Fale conosco</h1>
              <p>Preencha os campos abaixo para nos enviar uma mensagem</p>
            </div>
            <div className="">
              <label htmlFor="f-nome">Nome</label>{" "}
              <input
                type="text"
                className="form-control"
                id="f-nome"
                placeholder=""
                required=""
              />
            </div>
            <div className="">
              <label htmlFor="f-email">Email</label>{" "}
              <input
                type="email"
                className="form-control"
                id="f-email"
                placeholder=""
                required=""
              />
            </div>
            <div className="">
              <label htmlFor="data-check-in">Celular</label>{" "}
              <input
                type="tel"
                className="form-control"
                id="f-check-in"
                placeholder="(99) 99999-9999"
                required=""
              />
            </div>
            <div className="">
              <label htmlFor="f-msg">Mensagem</label>{" "}
              <input type="text" className="form-control" id="f-msg" />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
        <div className="row row-cols-1 row-cols-md-3 text-center gap-3 my-5 mx-auto">
          <div className="card col  m-auto p-0" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Central de Atendimento</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary" />
              <p className="card-text">Suporte pós venda.</p>
              <a href="#" className="card-link">
                0800 000 0000
              </a>
            </div>
          </div>
          <div className="card col m-auto p-0" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Ajuda na compra</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary" />
              <p className="card-text">Fale com um dos nossos agentes.</p>
              <a href="" className="card-link">
                99 99999-9999
              </a>
            </div>
          </div>
          <div className="card col  m-auto  p-0" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">E-mail</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary" />
              <p className="card-text">Entre em contato por email.</p>
              <a href="#" className="card-link">
                email@exemplo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
