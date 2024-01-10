import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const AddClient = () => {
  const [newClient, setNewClient] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    axios
      .post("https://localhost:7049/api/Cliente", newClient)
      .then(() => {
        router.push("/cliente");
      })
      .catch((error) => {
        alert("Erro ao inserir cliente:" + error);
      });
  };

  return (
    <>
      <div className="mx-auto">
        <h1 className={style.h1}>Inserir Cliente</h1>

        <form className="row g-3 mx-3">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              className="form-control"
              id="nome"
              type="text"
              name="nome"
              value={newClient.nome}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Telefone
            </label>
            <input
              className="form-control"
              id="telefone"
              type="text"
              name="telefone"
              value={newClient.telefone}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              value={newClient.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="text"
              className="form-control"
              id="senha"
              name="senha"
              value={newClient.senha}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleAddClient}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClient;
