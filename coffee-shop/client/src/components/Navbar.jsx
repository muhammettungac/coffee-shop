import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../actions/UserActions";

function Navbar() {
  const cartState = useSelector((state) => state.addToCartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { cartItems } = cartState;
  const { currentUser } = userState;
  const dispatch = useDispatch();

  console.log(currentUser);

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {currentUser == null ? (
                  <div className="d-flex flex-row">
                    <Link to="/register">
                      <button className="btn btn-outline-success">
                        Kayıt Ol
                      </button>
                    </Link>

                    <li className="nav-item">
                      <Link className="nav-link text-success" to="/cart">
                        Sepet
                        <i className="fa-sharp fa-solid fa-bag-shopping mx-2"></i>
                        <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-success">
                          {cartItems.length}
                        </span>
                      </Link>
                    </li>
                  </div>
                ) : (
                  <ul className="navbar-nav ms-auto">
                    <div className="dropdown ">
                      <button
                        className="btn btn-success dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Hoşgeldiniz {currentUser.name}
                      </button>
                      <ul className="dropdown-menu ">
                        <li>
                          <Link className="dropdown-item text-success" to="/">
                            Siparişlerim
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-danger"
                            onClick={logoutHandler}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <li className="nav-item">
                      <Link className="nav-link text-success" to="/cart">
                        Sepet
                        <i className="fa-sharp fa-solid fa-bag-shopping mx-2"></i>
                        <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-success">
                          {cartItems.length}
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
