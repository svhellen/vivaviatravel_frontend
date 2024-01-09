import React from "react";

const CardHospedagem = (hospedagem) => {
  
  return (
    <>
      <div className="card ">
        <img src={hospedagem.imgSrc} className="card-img-top" alt="..." />
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
            {hospedagem.nomeLocal}
          </p>
          <p className="card-text">{hospedagem.descricao}</p>
          <p>
            Preço a partir de <strong>R$ {hospedagem.preco}</strong>
          </p>
          <a href="#" className=" btn btn-primary d-block">
            Ver detalhes
          </a>
        </div>
      </div>
    </>
  );
};

export default CardHospedagem;
