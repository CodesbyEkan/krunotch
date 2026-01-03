import { Link, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const { user } = useContext(UserContext);

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/landingpage">
            {user}
          </Link>
          <div className="toggle-outline">
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={() => setIsToggled((prevToggle) => !prevToggle)}
            >
              {isToggled
                ? console.log("Button is toggled")
                : console.log("Button is not toggled!!")}
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {isToggled && (
            <div
              className={`offcanvas offcanvas-end ${isToggled ? "show" : ""}`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  {user}
                </h5>
                <div className="toggle-outline">
                  <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    onClick={() => setIsToggled((prevToggle) => !prevToggle)}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/landingpage"
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/portfolio"
                    >
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/project"
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
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
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
