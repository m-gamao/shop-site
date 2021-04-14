import React from "react";
import "./styles.scss";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import Registration from "./../../pages/Registration";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="simpletut logo" />
          </Link>
        </div>
      </div>
      <div className="callToActions">
        <ul>
          <li>
            <Link to="/registration">REGISTER</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
