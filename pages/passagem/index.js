import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    //get all tickets from api
    axios
      .get("https://vivaviatravel.somee.com/api/Passagem")
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de passagens: ", error);
      });
  }, []);

  const formatDataVoo = (dateString) => {
    return format(new Date(dateString), "dd/MM/yyyy"); // HH:mm
  };

  return (
    <section>
      <h1 className={style.h1}>Lista de Passagens</h1>
      <p>
        <Link
          href="passagem/add-passagem"
          className="btn-add-admin btn disabled"
        >
          Inserir Passagem
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Passagem Id</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Preço</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((element) => (
            <tr key={element.id} className={style.tabela}>
              <td>{element.passagemId}</td>
              <td>{element.origem}</td>
              <td>{element.destino}</td>
              <td>{element.preco}</td>
              <td>{formatDataVoo(element.dataVoo)}</td>
              <td>
                <Link
                  href={`passagem/update-passagem/${element.passagemId}`}
                  className="btn btn-warning disabled"
                >
                  Editar
                </Link>
                {/* <Link
                  href={`passagem/delete-passagem/${element.passagemId}`}
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
