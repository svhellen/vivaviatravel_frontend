import React from "react";
import styles from "../styles/Footer.module.css";


// import Link from 'next/link';
// import styles from '../styles/Footer.module.css';

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <Link href="/cliente">Cliente</Link>
//     </nav>
//   );
// };

// export default Navbar;

export default function Footer() {
  return (
    <>
      <footer id="footer" className={`${styles.footer} container-fluid`}>
        <div className="row">
          {/* logo marca */}
          <div className="col-6 col-md-4 mb-3 text-md-start">
            <a className="footer-brand " href="#">
              <img src="/images/logo.png" alt="logo" id="footer-logo" className={styles.footerlogo} style={{ width: "200px"}} />
            </a>
            <p>Descubra o Mundo, Abrace a Jornada!</p>
          </div>
          {/* links importantes */}
          <div className="col-6 col-md-8 mb-3 text-md-end">
            <ul id="secoes" className="nav pt-5 flex-column flex-md-row ">
              <li className="nav-item mb-2 col">
                <a href="#" className="nav-link p-0 ">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2 col">
                <a href="#" className="nav-link p-0 ">
                  Fale conosco
                </a>
              </li>
              <li className="nav-item mb-2 col">
                <a href="#" className="nav-link p-0  ">
                  Política de privacidade
                </a>
              </li>
              <li className="nav-item mb-2 col">
                <a href="#" className="nav-link p-0  ">
                  Termos &amp; Condições
                </a>
              </li>
            </ul>
          </div>
          {/* copyright e social medias */}
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 VivaVia Travel, Inc. All rights reserved.</p>
            <div className="social-media list-inline text-md-end">
              <a
                className="icon-link icon-link-hover list-inline-item"
                href="#"
              >
                <i className="bi bi-youtube" />
              </a>
              <a
                className="icon-link icon-link-hover list-inline-item"
                href="#">
                <i className="bi bi-instagram" />
              </a>
              <a
                className="icon-link icon-link-hover list-inline-item"
                href="#">
                <i className="bi bi-twitter" aria-hidden="true" />
              </a>
              <a
                className="icon-link icon-link-hover list-inline-item"
                style={{}}
                href="#" >
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
