import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // get all clients from api
    axios
      .get("https://localhost:7216/api/Cliente")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
      });
  }, []);

  return (
    <section>
      <h1 className={style.h1}>Lista de Clientes</h1>
      <p>
        <Link href="cliente/add-cliente" style={{ backgroundColor: "green" , color:'white', textDecoration:'none'}}>
          Inserir Cliente
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Cliente Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>{" "}
          </tr>
        </thead>
        {clients.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.clienteId}</td>
              <td>{element.nome}</td>
              <td>{element.email}</td>
              <td>
                <Link
                  href={`cliente/update-cliente/${element.clienteId}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <Link
                  href={`cliente/delete-cliente/${element.clienteId}`}
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
