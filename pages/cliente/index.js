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
      .get("https://vivaviatravel.somee.com/api/Cliente")
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
        <Link href="cliente/add-cliente" 
        className="btn btn-add-admin disabled" >
          Inserir Cliente
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Cliente Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
       
          <tbody> 
            {clients.map((element) => (
            <tr key={element.id} className={style.tabela}>
              <td>{element.clienteId}</td>
              <td>{element.nome}</td>
              <td>{element.email}</td>
              <td>{element.telefone}</td>
              <td>
                <Link
                  href={`cliente/update-cliente/${element.clienteId}`}
                  className="btn btn-warning disabled"
                >
                  Editar
                </Link>
                {/* <Link
                  href={`cliente/delete-cliente/${element.clienteId}`}
                  className="btn btn btn-danger disabled"
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
