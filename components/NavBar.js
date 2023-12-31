import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <>
    <header className={styles.header}>
  <nav className="navbar navbar-expand-md navbar-dark" id="menu">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{ color: "#FFF" }}>
        <img src="/images/logo_principal.png" alt="logo" id="logo" />
      </a>
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
          <h5 className="offcanvas-title login " id="offcanvasResponsiveLabel">
            <ul>
              <li className="nav-item">
                <a className="btn nav-link " href="/admin">
                  Crud
                </a>
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
            <a
              className="nav-link"
              // th:classappend="${#strings.equals('/home', currentPage) ? 'active' : ''}"
              href="/home"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              // th:classappend="${#strings.equals('/hospedagens', currentPage) ? 'active' : ''}"
              href="/hospedagens"
            >
              Hospedagens
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              // th:classappend="${#strings.equals('/passagens', currentPage) ? 'active' : ''}"
              href="/passagens"
            >
              Passagens
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              // th:classappend="${#strings.equals('/promocoes', currentPage) ? 'active' : ''}"
              href="/promocoes"
            >
              Promocoes
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              // th:classappend="${#strings.equals('/destinos', currentPage) ? 'active' : ''}"
              href="/destinos"
            >
              Destinos
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              // th:classappend="${#strings.equals('/contato', currentPage) ? 'active' : ''}"
              href="/contato"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
      {/* Navbar links for larger screens 
th:classappend="${#strings.equals('/admin', currentPage) ? 'active' : ''}*/}
      <div className="d-none d-lg-block login ">
        <ul>
          <li className="nav-item">
            <a className="btn nav-link active" href="/admin">
              Crud
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
  </nav>
</header>
    </>

  );
};

export default Navbar;
