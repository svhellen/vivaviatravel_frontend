import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModalPassagem from '@/components/ModalPassagem'

const Home = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    //get all tickets from api
    axios
      .get("http://vivaviatravel.somee.com/api/Reserva")
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
        <Link
          href="reserva/add-reserva"
          className="btn-add-admin"
        >
          Inserir Reserva
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Reserva Id</th>
            <th>Nome do Cliente</th>
            <th>Servico Adquirido</th>
            <th>Ações</th>
          </tr>
        </thead>
        {reservas.map((element) => (
          <tbody>
            <tr key={element.reservaId} className={style.tabela}>
              <td>{element.reservaId}</td>
              <td>{element.cliente.nome}</td>
              <td>{element.tipoServico}</td>
              <td>
                {element.tipoServico && (
                  <>
                    {element.tipoServico === "Passagem" && <ModalPassagem />}
                    {/* {element.tipoServico === "Hospedagem" && <ModalHospedagem />}
                    {element.tipoServico === "Pacote" && <ModalPacote />} */}
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
                  </>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
};

export default Home;
