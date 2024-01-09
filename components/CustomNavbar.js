import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import UncontrolledExample from "./BsCarouselHome";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropdownAdmin from "./DropdownAdmin";

const CustomNavbar = () => {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState("/");

  useEffect(() => {
    // Atualizar o estado local quando a rota muda
    setActiveKey(router.pathname);
  }, [router.pathname]);

  const isLinkActive = (href) => {
    return href === activeKey ? "active" : "";
  };

  return (
    <>
      {/* <Navbar>
        <UncontrolledExample />
      </Navbar> */}
       <header className={styles.header} >
        <nav className="navbar navbar-expand-md navbar-dark" id={styles.menu}>
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo_principal.png"
                width={180}
                height={50}
                priority
                alt="logo vivavia travel"
                className={styles.logoPrincipal}
              />
            </Link>
            {/* Button for small screens */}
            <button
              className="btn d-lg-none navbar-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
              id="offcanvas-btn"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Offcanvas menu */}
            <div
              className="offcanvas-lg offcanvas-end "
              tabIndex={-1}
              id="offcanvasResponsive"
              aria-labelledby="offcanvasResponsiveLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title login "
                  id="offcanvasResponsiveLabel"
                >
                  <ul>
                    <li className="nav-item">
                      {/* <Link href="/admin" className="btn nav-link ">
                        Crud
                      </Link> */}
                      <DropdownAdmin className="btn nav-link"/>

                      {/* <div className="btn-group nav-link">
  <button
    type="button"
    className="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    
  >
    Right-aligned menu example
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li>
      <button className="dropdown-item" type="button">
        Action
      </button>
    </li>
    <li>
      <button className="dropdown-item" type="button">
        Another action
      </button>
    </li>
    <li>
      <button className="dropdown-item" type="button">
        Something else here
      </button>
    </li>
  </ul>
</div> */}

                    </li>
                  </ul>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvasResponsive"
                  aria-label="Close"
                />
              </div>
              {/* Navbar links */}
              <ul className="navbar-nav offcanvas-body off col-lg-8 ">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/")}`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/hospedagens")}`}
                    href="/hospedagens"
                  >
                    Hospedagens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/passagens")}`}
                    href="/passagens"
                  >
                    Passagens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/promocoes")}`}
                    href="/promocoes"
                  >
                    Promocoes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/destinos")}`}
                    href="/destinos"
                  >
                    Destinos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isLinkActive("/contato")}`}
                    href="/contato"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" d-none d-lg-block login ">
              <ul className='my-auto'>
                {/* <li className="nav-item ">
                  <Link className="btn nav-link active " href="/cliente">
                    Crud
                  </Link>
                </li> */}
                <li className="nav-item ">
                  <DropdownAdmin className={`btn nav-link ${isLinkActive("/cliente" || "/passagem" || "/reserva")}`} />
                </li>
              </ul>


            </div>
          </div>
          {/* <hr /> */}
        </nav>
        {/* <div>{children}</div> */}
        <UncontrolledExample/>
      </header>
    </>
  );
};

export default CustomNavbar;
