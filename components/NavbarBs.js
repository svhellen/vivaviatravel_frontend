import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";

// import 'bootstrap/dist/css/bootstrap.css';
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Header() {
  // const router = useRouter();
  // const [activeKey, setActiveKey] = useState('/');

  // useEffect(() => {
  //   // Atualizar o estado local quando a rota muda
  //   setActiveKey(router.pathname);
  // }, [router.pathname]);

  return (
    <>
      {/* // false, 'sm', 'md',  key={expand} expand={expand}   {['lg', 'xl', 'xxl'].map((expand) => ( */}
      <header className={styles.header}>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          id={styles.menu}
          variant="dark"
          
          className={`${styles.nav}  mb-3`}
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <Image
                src="/images/logo_principal.png"
                width={180}
                height={50}
                priority
                alt="logo vivavia travel"
                className={styles.logoPrincipal}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-lg  navbar-dark`}
              id={`styles.offcanvas-btn`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg login `}>
                  {/* Offcanvas */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3" activeKey="/"
                // href === activeKey ? "active" : ""
                // onSelect={(if (href === selectedKey) ? "active" : "") => className={`nav-link ${isActive}`}}
                >
                  {/* activeKey={activeKey} */}
                  <Nav.Link data-rr-ui-event-key="/" href="/">Home</Nav.Link>
                  <Nav.Link data-rr-ui-event-key="/hospedagens" href="/hospedagens"
                  eventKey={"/hospedagens"}>Hospedagens</Nav.Link>
                  <Nav.Link  href="/passagens"
                  data-rr-ui-event-key="/passagens" 
                  eventKey="/passagens">Passagens</Nav.Link>
                  <Nav.Link href="/promocoes"
                  data-rr-ui-event-key="/promocoes" 
                  eventKey="/promocoes">Promoções</Nav.Link>
                  <Nav.Link href="/destinos"
                  data-rr-ui-event-key="/destinos" 
                  eventKey="/destinos">Destinos</Nav.Link>
                  <Nav.Link href="/contato"
                  data-rr-ui-event-key="/contato" 
                  eventKey="/contato">Contato</Nav.Link>
                  {/* <NavDropdown
                    title="cruuuuud"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="/cliente">Cliente</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <div className='login'>
                <NavDropdown
                  title="cruuuuud"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                  className={`btn nav-link`}
                >
                  <NavDropdown.Item href="/cliente">Cliente</NavDropdown.Item>
                  <NavDropdown.Item href="/passagem">Passagem</NavDropdown.Item>
                  <NavDropdown.Item href="/reserva">Reserva</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                </NavDropdown></div>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      {/* ))} */}
    </>
  );
}

export default Header;
