import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        //get all tickets from api
        axios.get("https://localhost:7216/api/Passagem")
        .then((response) => {
            setTickets(response.data);
    })
    .catch((error) => {
        console.error("Erro ao buscar a lista de passagens: ", error);
    });
}, []);

return (
    <section>
      <h1 className={style.h1}>Lista de Passagens</h1>
      <p>
        <Link href="passagem/add-passagem" style={{ backgroundColor: "green" , color:'white', textDecoration:'none'}}>
          Inserir Passagem
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Passagem Id</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Ações</th>{" "}
          </tr>
        </thead>
        {tickets.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.passagemId}</td>
              <td>{element.origem}</td>
              <td>{element.destino}</td>
              <td>
                <Link
                  href={`passagem/update-passagem/${element.passagemId}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <Link
                  href={`passagem/delete-passagem/${element.passagemId}`}
                  className="btn btn btn-danger"
                >
                  Excluir
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
};

export default Home;
