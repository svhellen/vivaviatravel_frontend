import Dropdown from 'react-bootstrap/Dropdown';

import styles from "@/styles/Navbar.module.css";

let currentPage = "current Page"
function DropdownAdmin() {
  return (
    <Dropdown style={styles.menuCrud}>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Crud { `&lt;` + currentPage}
        {/* Crud { "&lt;" + currentPage} */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/cliente">Clientes</Dropdown.Item>
        <Dropdown.Item href="/passagem">Passagens</Dropdown.Item>
        <Dropdown.Item href="/reserva">Reservas</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownAdmin;