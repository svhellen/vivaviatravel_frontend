import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from 'next/router';


const UpdateClient = () => {
  const [client, setClient] = useState({ clienteId: "",  nome: "", email: "", senha: "", telefone: "" });
  const router = useRouter(); 
  const { codigo } = router.query;

  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do cliente a ser atualizado
    axios
      .get("https://localhost:7049/api/Cliente/" + client.clienteId)
      .then((response) => {
       setClient(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do cliente:", error);
      });
  }, [client.clienteId]);

  const handleInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleUpdateClient = () => {
    axios
      .put("https://localhost:7049/api/Cliente/" + client.clienteId, client)
      .then(() => {
        router.push('/cliente');    
   
      })
      .catch((error) => {
        console.error("Erro ao atualizar cliente:", error);
      });
  };

  return (
    
    <div>
      <h1 className={style.h1}>Atualizar Cliente</h1>
      <table style={{marginLeft:'20px'}}>
        <tbody>
          <tr>
            <td>
              <label>Id do Cliente:</label>
            </td>
            <td>
              <input
                type="text"
                name="id"
                value={client.clienteId = codigo}
                onChange={handleInputChange}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Nome:</label>
            </td>
            <td>
              <input
                type="text"
                name="nome"
                value={client.nome}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input
                type="text"
                name="email"
                value={client.email}
                placeholder={client.email}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Senha:</label>
            </td>
            <td>
              <input
                type="text"
                name="senha"
                value={client.senha}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Telefone:</label>
            </td>
            <td>
              <input
                type="text"
                name="telefone"
                value={client.telefone}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          {/* <tr>
            <td>
              <label>Reserva id:</label>
            </td>
            <td>
              <input
                type="text"
                name="reservaId"
                value={client.reservaId}
                onChange={handleInputChange}
              />
            </td>
          </tr> */}
          <tr>
            <td colSpan="2">
              <button onClick={handleUpdateClient}>Atualizar Cliente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateClient;
