import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [hospedagens, setHospedagens] = useState([]);
  //https://vivaviatravel.somee.com/api/
  useEffect(() => {
    //get all tickets from api
    axios
      .get("https://vivaviatravel.somee.com/api/Hospedagem")
      .then((response) => {
        setHospedagens(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de hospedagens: ", error);
      });
  }, []);

  return (
    <section>
      <h1 className={style.h1}>Lista de Hospedagens</h1>
      <p>
        <Link href="hospedagem/add" className="btn-add-admin btn disabled">
          Inserir Hospedagem
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
        <table className="table container tabela">
          <thead>
            <tr>
              <th>Hospedagem Id</th>
              <th>Nome do Hotel</th>
              <th>Localização</th>
              <th>Avaliação</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {hospedagens.map((element) => (
              <tr key={element.id} className={style.tabela}>
                <td>{element.hospedagemId}</td>
                <td>{element.nomeHotel}</td>
                <td>{element.localizacao}</td>
                <td>{element.avaliacao}</td>
                <td>{element.precoDiaria}</td>
                <td>
                  <Link
                    href={`hospedagem/update-hospedagem/${element.hospedagemId}`}
                    className="btn btn-warning disabled"
                  >
                    Editar
                  </Link>
                  {/* <Link
                  href={`hospedagem/delete-hospedagem/${element.hospedagemId}`}
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
