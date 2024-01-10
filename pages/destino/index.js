import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        //get all tickets from api
        axios.get("https://localhost:7049/api/Destino")
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
        <Link href="destino/add-destino" className="btn-add-admin">
          Inserir Destino
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Destino Id</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        {destinos.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.destinoId}</td>
              <td>{element.cidade}</td>
              <td>{element.estado}</td>
              <td>
                <Link
                  href={`destino/update-destino/${element.destinoId}`}
                  className="btn btn-warning"
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
          </tbody>
        ))}
      </table>
    </section>
  );
};

export default Home;
