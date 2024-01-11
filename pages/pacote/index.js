import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    //get all tickets from api
    axios
      .get("https://vivaviatravel.somee.com/api/Pacote")
      .then((response) => {
        setPacotes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de pacotes: ", error);
      });
  }, []);

  return (
    <section>
      <h1 className={style.h1}>Lista de Pacotes</h1>
      <p>
        <Link href="pacote/add-pacote" className="btn-add-admin btn disabled">
          Inserir Pacote
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
        <table className="table container tabela">
          <thead>
            <tr>
              <th>Pacote Id</th>
              <th>Id Hospedagem</th>
              <th>Nome hotel</th>
              <th>Id Passagem</th>
              <th>Destino passagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacotes.map((element) => (
              <tr key={element.id} className={style.tabela}>
                <td>{element.pacoteId}</td>
                <td>{element.hospedagem.hospedagemId}</td>
                <td>{element.hospedagem.nomeHotel}</td>
                <td>{element.passagem.passagemId}</td>
                <td>{element.passagem.destino}</td>
                <td>
                  <Link
                    href={`destino/update-destino/${element.pacoteId}`}
                    className="btn btn-warning disabled"
                  >
                    Editar
                  </Link>
                  {/* <Link
                  href={`destino/delete-destino/${element.destinoId}`}
                  className="btn btn btn-danger"
                >
                  Excluir
                </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
