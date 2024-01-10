import Head from "next/head";
import { Image } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [hospedagens, setHospedagens] = useState([]);
  const [passagens, setPassagens] = useState([]);
  const [pacotes, setPacotes] = useState([]);
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    // Hospedagem
    axios.get('http://vivaviatravel.somee.com/api/Hospedagem')
      .then((response) => {
        setHospedagens(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de hospedagens: ', error);
      });

    // Passagem
    axios.get('http://vivaviatravel.somee.com/api/Passagem')
      .then((response) => {
        setPassagens(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de passagens: ', error);
      });

    // Pacote
    axios.get('http://vivaviatravel.somee.com/api/Pacote')
      .then((response) => {
        setPacotes(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de pacotes: ', error);
      });

    // Destino
    axios.get('http://vivaviatravel.somee.com/api/Destino')
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de destinos: ', error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>VivaVia Travel</title>
      </Head>
        <>
          <div className="container-fluid py-3 my-3 mx-auto">
            <section id="top-destinos">
              <div>
                <div className="d-flex justify-content-between ver-mais" >
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
                  <div key={destino.destinoId} className="card text-bg-dark">
                    <Image
                      className="card-img rounded-1"
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
          </div>
          <div className="d-block">
            {/* cards hospedagens  */}

            <section
              id="hospedagens"
              className="container-fluid py-3 my-3 mx-auto"
            >
              <div>
                <div className="d-flex justify-content-between ver-mais" >
                  <h1 className=" ">Hospedagens</h1>
                  <Link className="btn" href="/hospedagens">
                    Ver mais
                  </Link>
                </div>
                <p className="display-4">
                  Milhares de hotéis para você encontrar o perfeito pras suas
                  férias.
                </p>
              </div>
              <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
                {hospedagens.slice(0, 4).map((hospedagem) => (
                  <div key={hospedagem.hospedagemId} className="card ">
                    <Image
                      src={hospedagem.imagemUrl}
                      className="img-fluid rounded-start"
                      alt="..."
                      fluid
                    />
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
            {/* cards passagens  */}
            <section
              id="passagens"
              className="container-fluid py-3 my-3 mx-auto"
            >
              <div className=" ver-mais" >
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
                      <Image
                        src={passagem.imagemUrl}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Passagem para {passagem.destino}
                        </h5>
                        <p className="card-subtitle">
                          Classe: {passagem.classe}
                        </p>
                        <p>
                          <i className="bi bi-airplane" /> Saindo de{" "}
                          {passagem.origem}
                        </p>
                        <p>
                          <i className="bi bi-airplane" /> Para{" "}
                          {passagem.destino}
                        </p>
                      </div>
                      <div className="card-footer">
                        <p>
                          Preço a partir de <strong>R$ {passagem.preco}</strong>
                        </p>
                        <a
                          href="#detalhes"
                          className=" btn btn-primary d-block"
                        >
                          Ver detalhes
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* cards Promoções  */}
            <section
              id="promocoes"
              className="container-fluid py-3 my-3 mx-auto"
            >
              <div className=" ver-mais" >
                <div className="d-flex justify-content-between">
                  <h1>Pacotes promocionais</h1>
                  <Link className="btn" href="/promocoes">
                    Ver mais
                  </Link>
                </div>
                <p className="display-4">
                  Adquira pacotes com preços incríveis.
                </p>
              </div>
              <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
                {pacotes.slice(0, 4).map((promocao) => (
                  <div key={promocao.id} className="">
                    <div className="card ">
                      <Image
                        src={promocao.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
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
                        <p className="card-text">
                          {promocao.hospedagem.descricao}
                        </p>
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
          </div>
        </>
      {/* )} */}
      {/* </main>
   </Layout> */}
    </>
  );
}
