import Head from "next/head";
import { Image } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://vivaviatravel.somee.com/api/";

const fetchApiData = async (endpoint) => {
  try {
    const response = await axios.get(API_BASE_URL + endpoint);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar a lista de ${endpoint}: `, error);
    return [];
  }
};

export default function Home() {
  const [hospedagens, setHospedagens] = useState([]);
  const [passagens, setPassagens] = useState([]);
  const [pacotes, setPacotes] = useState([]);
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [hospedagensData, passagensData, pacotesData, destinosData] =
        await Promise.all([
          fetchApiData("Hospedagem"),
          fetchApiData("Passagem"),
          fetchApiData("Pacote"),
          fetchApiData("Destino"),
        ]);

      setHospedagens(hospedagensData);
      setPassagens(passagensData);
      setPacotes(pacotesData);
      setDestinos(destinosData);
    };

    fetchData();
  }, []);

  const renderDestinos = () => {
    return (
      <section id="top-destinos">
        <div>
          <div className="d-flex justify-content-between ver-mais">
            <h1>Destinos</h1>
            <Link className="btn" href="/destinos">
              Ver mais
            </Link>
          </div>
          <p className=" display-4">
            Lugares mais procurados do Brasil essa semana.
          </p>
        </div>
        <div className="card-group gap-3">
          {destinos.slice(0, 2).map((destino) => (
            <div key={destino.destinoId} className="card text-bg-dark rounded-3">
              <Image
                className="card-img rounded-3"
                src={destino.imagemUrl}
                alt="..."
              />
              <div className="card-img-overlay">
                <h4 className="card-title">{destino.cidade}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderHospedagens = () => {
    return (
      <section id="hospedagens" className="container-fluid py-3 my-3 mx-auto">
        <div>
          <div className="d-flex justify-content-between ver-mais">
            <h1 className=" ">Hospedagens</h1>
            <Link className="btn" href="/hospedagens">
              Ver mais
            </Link>
          </div>
          <p className="display-4">
            Milhares de hotéis para você encontrar o perfeito pras suas férias.
          </p>
        </div>
        <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
          {hospedagens.slice(0, 4).map((hospedagem) => (
            <div key={hospedagem.hospedagemId} className="card ">
              <div className="div-card-img">
              <Image
                src={hospedagem.imagemUrl}
                className="img-fluid rounded-top"
                alt="..."
                fluid
              /></div>
              <div className="card-body">
                <h5 className="card-title">{hospedagem.nomeHotel}</h5>
                <div className="pb-3">
                  <div className="rate">{hospedagem.avaliacao}</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />{" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />{" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                </div>
                <p>
                  <i className="bi bi-geo-alt" /> {hospedagem.localizacao}
                </p>
                <p className="card-text">{hospedagem.descricao}</p>
              </div>
              <div className="p-3">
                <p>
                  Preço a partir de <strong>R$ {hospedagem.precoDiaria}</strong>
                </p>
                <a href="#detalhes" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderPassagens = () => {
    return (
      <section id="passagens" className="container-fluid py-3 my-3 mx-auto">
        <div className=" ver-mais">
          <div className="d-flex justify-content-between">
            <h1>Passagens Aéreas</h1>
            <Link className="btn" href="/passagens">
              Ver mais
            </Link>
          </div>
          <p className="display-4">Compre passagens com um clique.</p>
        </div>
        <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll   ">
          {passagens.slice(0, 4).map((passagem) => (
            <div key={passagem.passagemId} className="">
              <div className="card ">
                <div className="div-card-img">
                <Image
                  src={passagem.imagemUrl}
                  className="img-fluid rounded-top"
                  alt="..."
                /></div>
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
                <div className="p-3">
                  <p>
                    Preço a partir de <strong>R$ {passagem.preco}</strong>
                  </p>
                  <a href="#detalhes" className=" btn btn-primary d-block">
                    Ver detalhes
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderPromocoes = () => {
    return (
      <section id="promocoes" className="container-fluid py-3 my-3 mx-auto">
        <div className=" ver-mais">
          <div className="d-flex justify-content-between">
            <h1>Pacotes promocionais</h1>
            <Link className="btn" href="/promocoes">
              Ver mais
            </Link>
          </div>
          <p className="display-4">Adquira pacotes com preços incríveis.</p>
        </div>
        <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
          {pacotes.slice(0, 4).map((promocao) => (
            <div key={promocao.pacoteId} className="">
              <div className="card ">
              <div className="div-card-img ">
                <Image
                  src={promocao.imagemUrl}
                  className="img-fluid rounded-top"
                  alt="..."
                /></div>
                <div className="card-body">
                  <span className="balao-promo position-absolute top-0">
                    -{promocao.percentDesconto}%
                  </span>
                  <h5 className="card-title">
                    Pacote para {promocao.passagem.destino}
                  </h5>
                  <div className="pb-3" />
                  <p>
                    <i className="bi bi-airplane" /> Voo direto{" "}
                    {promocao.passagem.origem}{" "}
                    <i className="bi bi-arrow-left-right" /> Destino
                  </p>
                  <p>
                    <i className="bi bi-building" /> Hotel{" "}
                    {promocao.hospedagem.nomeHotel}
                  </p>
                  <p className="card-text">{promocao.hospedagem.descricao}</p>
                </div>
                <div className="p-3">
                  <p>
                    Preço a partir de{" "}
                    <strong>
                      R$
                      {2 *
                        (promocao.hospedagem.precoDiaria +
                          promocao.passagem.preco) -
                        promocao.percentDesconto}
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
      </section>
    );
  };

  return (
    <>
      <Head>
        <title>VivaVia Travel - Home</title>
      </Head>
      <div className="container-fluid py-3 my-3 mx-auto">
        {renderDestinos()}
        {renderHospedagens()}
        {renderPassagens()}
        {renderPromocoes()}
      </div>
    </>
  );
}
