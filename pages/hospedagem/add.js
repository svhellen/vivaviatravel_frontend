import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const AddHospedagem = () => {
  const [newHospedagem, setNewHospedagem] = useState({
    nomeHotel: "",
    descricao: "",
    localizacao: "",
    avaliacao: "",
    precoDiaria: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewHospedagem({ ...newHospedagem, [e.target.name]: e.target.value });
  };

  const handleAddHospedagem = () => {
    axios
      .post("https://localhost:7049/api/Hospedagem", newHospedagem)
      .then(() => {
        router.push("/hospedagem");
      })
      .catch((error) => {
        alert("Erro ao inserir hospedagem:" + error);
      });
  };

  return (
    <div className="mx-auto">
      <form className="row g-3 mx-3">
        <h1 className={style.h1}>Inserir Hospedagem</h1>
        <div className="col-md-6">
          <label htmlFor="nomeHotel" className="form-label">
            Nome do Hotel
          </label>
          <input
            className="form-control"
            id="nomeHotel"
            type="text"
            name="nomeHotel"
            value={newHospedagem.nomeHotel}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <input
            className="form-control"
            id="descricao"
            type="text"
            name="descricao"
            value={newHospedagem.descricao}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="nomeHotel" className="form-label">
            Localização
          </label>
          <input
            className="form-control"
            id="localizacao"
            type="text"
            name="localizacao"
            value={newHospedagem.localizacao}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="nomeHotel" className="form-label">
            Avaliacao
          </label>
          <input
            className="form-control"
            id="avaliacao"
            type="text"
            name="avaliacao"
            value={newHospedagem.avaliacao}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="nomeHotel" className="form-label">
            Preço da diaria
          </label>
          <input
            className="form-control"
            id="precoDiaria"
            type="text"
            name="precoDiaria"
            value={newHospedagem.precoDiaria}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn btn-primary btn-add-admin"
            onClick={handleAddHospedagem}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHospedagem;
