import React from "react";
import "./styles.scss";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

const Header = (props) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            latitude
            {/* <img src={Logo} alt="simpletut logo" /> */}
          </Link>
        </div>
      </div>
      <div className="callToActions">


        {currentUser && (
          <ul>
            <li>
              <span onClick={() => auth.signOut()}>
                LogOut
              </span>
            </li>
          </ul>
        )}

        {!currentUser && (
        <ul>
          <li>
            <Link to="/registration">REGISTER</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      
        )}
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser = null
};
export default Header;
