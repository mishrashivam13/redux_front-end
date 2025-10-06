import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
  const { cart } = useSelector((state) => state.allCart);

  const activeStyle = {
    fontWeight: "bold",
    color: "#ff6347",
  };

  return (
    <div id="navBar" className="sticky-top shadow-sm bg-white">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          {/* <i
            className="bi bi-amazon me-2"
            style={{ fontSize: "1.8rem", color: "#ff9900" }}
          ></i> */}
          <img
          style={{width:"95px"}} src="logo_full.png"/>
          {/* Cartify */}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"  />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <form style={{marginRight:"180px"}} className="d-flex" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <li className="nav-item mx-2">
              <NavLink
                className="nav-link nav-hover"
                to="/ProductCard"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                All Products
              </NavLink>
            </li>
            <li className="nav-item mx-2 position-relative">
              <NavLink
                className="nav-link nav-hover d-flex align-items-center"
                to="/CartPage"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <i
                  className="bi bi-cart3 me-1"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                Cart
                <span className="cart-badge">{cart.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
