import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "@/styles/Navbar.module.css";


function DropdownAdmin() {
  return (
    <Dropdown  id="dropdown-custom-components" 
     >
      {/*className={` nav-link`} style={styles.menuCrud} ${styles.menuCrud}  as={CustomToggle}*/}
      <Dropdown.Toggle className={` nav-link`}  variant="transparent" id="dropdown-basic">
        Admin
        {/* Crud { "&lt;" + currentPage} */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/*  as={CustomMenu} */}
        <Dropdown.Item className='' href="/cliente">Clientes</Dropdown.Item>
        <Dropdown.Item href="/passagem">Passagens</Dropdown.Item>
        <Dropdown.Item href="/reserva">Reservas</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownAdmin;
