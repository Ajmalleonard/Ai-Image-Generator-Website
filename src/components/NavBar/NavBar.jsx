import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [underline, setUnderline] = useState("shop");

  return (
    <div className="Nav">
      <div className="nav-logo">
        <img className="logo" src={logo} alt="" />
        <h4 className="p-nav">Dodddle</h4>
      </div>
      <ul>
        <li
          onClick={() => {
            setUnderline("shop");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Shop
          </Link>{" "}
          {underline === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setUnderline("men");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/men">
            Men
          </Link>
          {underline === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setUnderline("women");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/women">
            Women
          </Link>{" "}
          {underline === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setUnderline("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
            Kids
          </Link>
          {underline === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="cart-counter">0</div>
      </div>
    </div>
  );
};

export default NavBar;
