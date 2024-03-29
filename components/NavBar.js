import React from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownAdmin from "./DropdownAdmin";
import "bootstrap/dist/css/bootstrap.css";
import styles from "@/styles/Navbar.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {

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
      <header className={styles.header}>
        <nav className="navbar navbar-expand-md navbar-dark" id={styles.menu} >
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
                    <DropdownAdmin
                    className={`btn nav-link ${isLinkActive(
                      "/cliente" || "/passagem" || "/reserva"
                    )}`}
                  />
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
                  <Link className={`nav-link ${isLinkActive("/")}`} href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
      
                    href="/hospedagens"
                    className={`nav-link ${isLinkActive("/hospedagens")}`}
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
            {/* Navbar links for larger screens*/}
            <div className=" d-none d-lg-block login ">
              <ul className="my-auto">
                <li className="nav-item ">
                  <DropdownAdmin
                    className={`btn nav-link ${isLinkActive(
                      "/cliente" || "/passagem" || "/reserva"
                    )}`}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* <hr /> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
