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
                    to={"/cases"}
                    className="nav-link text-light"
                    aria-current="page"
                  >
                    PHONE CASES
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light "
                    aria-current="page"
                    href="#"
                  >
                    ACCESSORIES
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"/homestay"} className="nav-link text-light">
                    COLLECTION
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
