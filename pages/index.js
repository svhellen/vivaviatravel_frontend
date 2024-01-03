import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>VivaVia Travel</title>
      </Head>
  <header className={`${styles.homeHeader} row`}>
    <div
      id="carousel-principal"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {/* <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active " id="item1">
          <div className="carousel-caption d-block">
            <h1 className=" display-3">Descubra o Mundo</h1>
            <h1 className=" display-3">Abrace a Jornada</h1>
          </div>
        </div>
        <div className="carousel-item" id="item2">
          <div className="carousel-caption d-block">
            <h1 className=" display-3">Descubra o Mundo</h1>
            <h1 className=" display-3">Abrace a Jornada</h1>
            {/*<h1 class=" display-3">Descubra destinos deslumbrantes e
							experiências únicas.</h1>*/}
          </div>
        </div>
        <div className="carousel-item" id="item3">
          <div className="carousel-caption d-block">
            <h1 className=" display-3">Descubra o Mundo</h1>
            <h1 className=" display-3">Abrace a Jornada</h1>
            {/*<h1 class=" display-3">Nossos agentes de viagens estão
							prontos para ajudá-lo a encontrar a melhor opção para a sua
							próxima aventura.</h1> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div id="" className="container-fluid py-3 my-3 mx-auto">
      <div id="top-destinos">
        <div>
          <div className="d-flex justify-content-between" id="ver-mais">
            <h1>Destinos</h1>
            <a className="btn" href="views/_pages/destinos.jsp">
              Ver mais
            </a>
          </div>
          <p className=" display-4">
            Lugares mais procurados do Brasil essa semana.
          </p>
        </div>
        <div className="card-group gap-3">
          <div className="card text-bg-dark">
            <img
              src="/images/cidades/rio-rj.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h4 className="card-title">Rio de Janeiro</h4>
            </div>
          </div>
          <div className="card text-bg-dark">
            <img
              src="/images/cidades/porto-seguro-ba.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h4 className="card-title">Porto Seguro</h4>
            </div>
          </div>
          <div className="card text-bg-dark">
            <img
              src="/images/cidades/sp.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h4 className="card-title">São Paulo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </div>
		</div>*/}
    <div className="d-block">
      {/* cards hospedagens  */}
      <section id="hospedagens" className="container-fluid py-3 my-3 mx-auto">
        <div>
          <div className="d-flex justify-content-between" id="ver-mais">
            <h1 className=" ">Hospedagens</h1>
            <a className="btn" href="views/_pages/hospedagens.jsp">
              Ver mais
            </a>
          </div>
          <p className="display-4">
            Milhares de hotéis para você encontrar o perfeito pras suas férias.
          </p>
        </div>
        <div className=" ">
          <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
            <div className="card ">
              <img
                src="/images/hoteis/hotel-4.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,9</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />{" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />{" "}
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
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="/images/hoteis/hotel-5.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,5</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />{" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />{" "}
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
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="/images/hoteis/hotel-6.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,7</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />{" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />{" "}
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
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="/images/hoteis/hotel-3.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">NomeHotel</h5>
                <div className="pb-3">
                  <div className="rate">4,3</div>
                  <div className="d-inline">
                    <i className="bi bi-star-fill" />{" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />{" "}
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
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cards passagens  */}
      <section id="passagens" className="container-fluid py-3 my-3 mx-auto">
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
          <div className="">
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
                  <i className="bi bi-airplane" /> Saindo de Sâo Paulo
                </p>
                <p>
                  <i className="bi bi-airplane" /> Para Porto Seguro
                </p>
              </div>
              <div className="card-footer">
                <p>
                  Preço a partir de <strong>R$ 380</strong>
                </p>
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="">
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
                  <i className="bi bi-airplane" /> Saindo de São Paulo
                </p>
                <p>
                  <i className="bi bi-airplane" /> Para Fortaleza
                </p>
              </div>
              <div className="card-footer">
                <p>
                  Preço a partir de <strong>R$ 560</strong>
                </p>
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="">
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
                  <i className="bi bi-airplane" /> Saindo de São Paulo
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
          <div className="">
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
                  <i className="bi bi-airplane" /> Saindo de São Paulo
                </p>
                <p>
                  <i className="bi bi-airplane" /> Para Belo Horizonte
                </p>
              </div>
              <div className="card-footer">
                <p>
                  Preço a partir de <strong>R$ 430</strong>
                </p>
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cards Promoções  */}
      <section id="promocoes" className="container-fluid py-3 my-3 mx-auto">
        <div className=" " id="ver-mais">
          <div className="d-flex justify-content-between">
            <h1>Pacotes promocionais</h1>
            <a className="btn" href="views/_pages/promocoes.jsp">
              Ver mais
            </a>
          </div>
          <p className="display-4">Adquira pacotes com preços incríveis.</p>
        </div>
        <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll   ">
          <div className="">
            <div className="card ">
              <img
                src="/images/hoteis/ex-2.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <span className="balao-promo position-absolute top-0">
                  -25%
                </span>
                <h5 className="card-title">Pacote para Gramado</h5>
                <div className="pb-3" />
                <p>
                  <i className="bi bi-airplane" /> Voo direto Origem{" "}
                  <i className="bi bi-arrow-left-right" /> Destino
                </p>
                <p>
                  <i className="bi bi-building" /> Hotel nomeHotel
                </p>
                <p className="card-text">Breve descrição do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ 1.230</strong>
                </p>
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card ">
              <img
                src="/images/hoteis/ex-6.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <span className="balao-promo position-absolute top-0">
                  -10%
                </span>
                <h5 className="card-title">Pacote para São Paulo</h5>
                <div className="pb-3" />
                <p>
                  <i className="bi bi-airplane" /> Voo direto Origem{" "}
                  <i className="bi bi-arrow-left-right" /> Destino
                </p>
                <p>
                  <i className="bi bi-building" /> Hotel nomeHotel
                </p>
                <p className="card-text">Breve descrição do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ 1540</strong>
                </p>
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card ">
              <img
                src="/images/hoteis/ex-7.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <span className="balao-promo position-absolute top-0">
                  -20%
                </span>
                <h5 className="card-title">Pacote para Manaus</h5>
                <div className="pb-3" />
                <p>
                  <i className="bi bi-airplane" /> Voo direto Origem{" "}
                  <i className="bi bi-arrow-left-right" /> Destino
                </p>
                <p>
                  <i className="bi bi-building" /> Hotel nomeHotel
                </p>
                <p className="card-text">Breve descrição do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ 970</strong>
                </p>
                <a href="#" className=" btn btn-primary d-block">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card ">
              <img
                src="/images/hoteis/hotel-5.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <span className="balao-promo position-absolute top-0">-5%</span>
                <h5 className="card-title">Pacote para Recife</h5>
                <div className="pb-3" />
                <p>
                  <i className="bi bi-airplane" /> Voo direto Origem{" "}
                  <i className="bi bi-arrow-left-right" /> Destino
                </p>
                <p>
                  <i className="bi bi-building" /> Hotel nomeHotel
                </p>
                <p className="card-text">Breve descrição do hotel.</p>
                <p>
                  Preço a partir de <strong>R$ 1640</strong>
                </p>
                <a href="#" className=" btn btn-primary d-block">
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
