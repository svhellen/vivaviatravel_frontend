// pages/teste.js
import { useState, useEffect } from "react";
import BackgroundChanger from "@/components/BackgroundChanger";
import Image from "next/image";
import OffcanvasExample from "@/components/NavbarBs";

const Teste = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Faz a chamada para a API simulada ao carregar a página
    fetch("/api/fakeData")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <>
<OffcanvasExample/>
      <h1>Postagens:</h1>
      {/* {data && (
        <ul>
          {data.posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )} */}

      <div className="d-grid">
        {/* cards hospedagens  */}
        <section id="hospedagens" className="container-fluid py-3 my-3 mx-auto">
          <h1>Hospedagens em alta</h1>
          {data && (
          <div className="row row-cols g-4 py-3">
            {data.hospedagens.map((hospedagem) => (
              // <CardHospedagem data={hospedagem} />
              <div key={hospedagem.id} className="col">
                <div className="card ">
                  <Image
                    src={hospedagem.imgSrc}
                    className="card-img-top"
                    width={500} 
                    height={300} 
                    alt="..."
                    layout="responsive"
                    objectFit="cover" 
                  />
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
                      <i className="bi bi-geo-alt" /> {hospedagem.nomeLocal}
                    </p>
                    <p className="card-text">{hospedagem.descricao}</p>
                    <p>
                      Preço a partir de <strong>R$ {hospedagem.preco}</strong>
                    </p>
                    <a
                      href="#"
                      className=" btn btn-primary d-block"
                    >
                      Ver detalhes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </section>
      </div>
      <BackgroundChanger/>
    </>
  );
};

export default Teste;
