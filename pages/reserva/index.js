import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        //get all tickets from api
        axios.get("https://localhost:7216/api/Reserva")
        .then((response) => {
          setReservas(response.data);
    })
    .catch((error) => {
        console.error("Erro ao buscar a lista de reservas: ", error);
    });
}, []);

return (
    <section>
      <h1 className={style.h1}>Lista de Reservas</h1>
      <p>
        <Link href="reserva/add-reserva" style={{ backgroundColor: "green" , color:'white', textDecoration:'none'}}>
          Inserir Reserva
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Reserva Id</th>
            <th>Nome do Cliente</th>
            <th>Destino da Passagem</th>
            <th>Ações</th>{" "}
          </tr>
        </thead>
        {reservas.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.reservaId}</td>
              <td>{element.cliente.nome}</td>
              <td>{element.passagem.destino}</td>
              <td>
                <Link
                  href={`reserva/update-reserva/${element.reservaId}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <Link
                  href={`reserva/delete-reserva/${element.reservaId}`}
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
