import { Link, Outlet } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useContext } from "react";

export default function Navbar() {
  const { values } = useContext(MyContext);

  return (
    <>
      <nav class="navbar fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/landingpage">
          {values}
          </Link>
          <div className="toggle-outline">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                {values}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/landingpage"
                  >
                    HOME
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/portfolio"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/project"
                  >
                    PROJECTS
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    CONTACTS
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    LOG OUT
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
