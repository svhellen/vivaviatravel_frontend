import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
    const [hospedagens, setHospedagens] = useState([]);
//http://vivaviatravel.somee.com/api/
    useEffect(() => {
        //get all tickets from api
        axios.get("http://vivaviatravel.somee.com/api/Hospedagem")
        .then((response) => {
            setHospedagens(response.data);
    })
    .catch((error) => {
        console.error("Erro ao buscar a lista de hospedagens: ", error);
    });
}, []);

return (
    <section>
      <h1 className={style.h1}>Lista de Passagens</h1>
      <p>
        <Link href="hospedagem/add" 
        className="btn-add-admin">
          Inserir Hospedagem
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Hospedagem Id</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Ações</th>{" "}
          </tr>
        </thead>
        {hospedagens.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.hospedagemId}</td>
              <td>{element.nomeHotel}</td>
              <td>{element.localizacao}</td>
              <td>
                <Link
                  href={`hospedagem/update-hospedagem/${element.hospedagemId}`}
                  className="btn btn-warning"
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
          </tbody>
        ))}
      </table>
    </section>
  );
};

export default Home;
