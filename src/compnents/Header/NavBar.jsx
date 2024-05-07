import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg   "
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start text-bg-light d-flex"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header bg-dark text-light fw-bold">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                Main Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end pe-3 fw-bold">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link text-light"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/collections"} className="nav-link text-light">
                    Collections
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link text-light">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link text-light">
                    About
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
