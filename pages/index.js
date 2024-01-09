import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
// import CustomNavbar from '@/components/CustomNavbar'
// import { CarouselHome } from '@/components/BsCarouselHome'

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Faz a chamada para a API simulada ao carregar a página
    fetch("/api/fakeData")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <>
      <Head>
        <title>VivaVia Travel</title>
      </Head>
      {/* <Navbar>
        <CarouselHome />
      </Navbar>*/}
      {/* <CustomNavbar/>  */}
      {/* <Layout titulo="Título da Página" useCustomNavbar={true}>  pageProps.titulo={"titulo page"}
  <main>*/}
      {data && (
        <>
          <div id="" className="container-fluid py-3 my-3 mx-auto">
            <section id="top-destinos">
              <div>
                <div className="d-flex justify-content-between" id="ver-mais">
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
                {data.destinos.slice(0, 2).map((destino) => (
                  <div key={destino.id} className="card text-bg-dark">
                    <Image
                      className="card-img"
                      src={destino.imgSrc}
                      width={500}
                      height={300}
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
                <div className="d-flex justify-content-between" id="ver-mais">
                  <h1 className=" ">Hospedagens</h1>
                  <a className="btn" href="views/_pages/hospedagens.jsp">
                    Ver mais
                  </a>
                </div>
                <p className="display-4">
                  Milhares de hotéis para você encontrar o perfeito pras suas
                  férias.
                </p>
              </div>
              <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
                {data.hospedagens.slice(0, 4).map((hospedagem) => (
                  <div key={hospedagem.id} className="card ">
                    <img
                      src={hospedagem.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
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
                        <i className="bi bi-geo-alt" /> {hospedagem.nomeLocal}
                      </p>
                      <p className="card-text">{hospedagem.descricao}</p>
                      <p>
                        Preço a partir de <strong>R$ {hospedagem.preco}</strong>
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
              <div className=" " id="ver-mais">
                <div className="d-flex justify-content-between">
                  <h1>Passagens Aéreas</h1>
                  <a className="btn" href="views/_pages/passagens.jsp">
                    Ver mais
                  </a>
                </div>
                <p className="display-4">Compre passagens com um clique.</p>
              </div>
              <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll   ">
                {data.passagens.slice(0, 4).map((passagem) => (
                  <div key={passagem.id} className="">
                    <div className="card ">
                      <img
                        src={passagem.imgSrc}
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
              <div className=" " id="ver-mais">
                <div className="d-flex justify-content-between">
                  <h1>Pacotes promocionais</h1>
                  <a className="btn" href="views/_pages/promocoes.jsp">
                    Ver mais
                  </a>
                </div>
                <p className="display-4">
                  Adquira pacotes com preços incríveis.
                </p>
              </div>
              <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
                {data.promocoes.slice(0, 4).map((promocao) => (
                  <div key={promocao.id} className="">
                    <div className="card ">
                      <img
                        src={promocao.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-body">
                        <span className="balao-promo position-absolute top-0">
                          -{promocao.percentPromo}%
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
            </section>
          </div>
        </>
      )}
      {/* </main>
   </Layout> */}
    </>
  );
}
