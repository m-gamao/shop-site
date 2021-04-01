import React from "react";
import { Link } from "react-router-dom";
import ShopMens from "./../../assets/ShopMens.jpg";
import ShopWomens from "./../../assets/ShopWomens.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomens})`,
          }}
        >
          <Link to="/search/womens">Shop Womens</Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMens})`,
          }}
        >
          <Link to="/search/mens">Shop Mens</Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
