import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    //get all tickets from api
    axios
      .get("https://vivaviatravel.somee.com/api/Destino")
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos: ", error);
      });
  }, []);

  return (
    <section>
      <h1 className={style.h1}>Lista de Destinos</h1>
      <p>
        <Link href="destino/add-destino" className="btn-add-admin btn disabled">
          Inserir Destino
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
        <table className="table container tabela">
          <thead>
            <tr>
              <th>Destino Id</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {destinos.map((element) => (
              <tr key={element.id} className={style.tabela}>
                <td>{element.destinoId}</td>
                <td>{element.cidade}</td>
                <td>{element.estado}</td>
                <td>
                  <Link
                    href={`destino/update-destino/${element.destinoId}`}
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
