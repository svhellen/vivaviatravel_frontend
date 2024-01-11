import axios from "axios";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModalPassagem from "@/components/ModalPassagem";

const Home = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    //get all tickets from api
    axios
      .get("https://vivaviatravel.somee.com/api/Reserva")
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
        <Link href="reserva/add-reserva" className="btn-add-admin btn disabled">
          Inserir Reserva
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll  ">
        <table className="table container tabela">
          <thead>
            <tr>
              <th>Reserva Id</th>
              <th>Nome do Cliente</th>
              <th>Servico Adquirido</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((element) => (
              <tr key={element.id} className={style.tabela}>
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
                        className="btn btn-warning disabled"
                      >
                        Editar
                      </Link>
                      {/* <Link
                      href={`reserva/delete-reserva/${element.reservaId}`}
                      className="btn btn btn-danger"
                    >
                      Excluir
                    </Link> */}
                    </>
                  )}
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
