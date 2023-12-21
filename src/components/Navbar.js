import "./navbar.css";
import Autologo from "../Img/Autologo.png";
import { Link } from "react-router-dom";
// import { LiaCartArrowDownSolid } from "react-icons/LiaCartArrowDownSolid";
import { item } from "../App";
import { useContext } from "react";
function Navbar() {
  const{s,vs}=useContext(item)
  const handleLogout = () => {
    // Remove authentication data from localStorage
    localStorage.removeItem("auth");
    // Reload the page
    window.location.reload();
  };

  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem("auth");
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="Autologo" src={Autologo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link !active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About-us">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <li>
                      <Link className="dropdown-item" to="/automobile-ads">
                        Automobile Ads
                      </Link>
                    </li>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/spare-parts">
                      Spare parts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/inspection-ad"}>
                      Inspection Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contactus">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin Panel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/additems">
                  Add Items 
                </Link>
              </li>
            </ul>
            <div className="nav-link">
            <Link className="nav-link" to="/cart">
  <i className="fa-solid fa-cart-shopping" style={{ color: "white", marginRight: "2vh" }}></i>
  <h1 className="badge bg-danger">{s}</h1>
</Link>

            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
              {isAuthenticated ? (
              <button className="btn btn-link" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
