import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ShopMens from "./../../assets/ShopMens.jpg";
import ShopWomens from "./../../assets/ShopWomens.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="image"
          style={{
            backgroundImage: `url(${ShopWomens})`,
          }}
        >
          <Link to="/search/womens">
            <Button className="button">
              {/* <Button style={myStyle}> */}
              <p>Shop Womens</p>
            </Button>
          </Link>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${ShopMens})`,
          }}
        >
          <Link to="/search/mens">
            <Button className="button">
              {/* <Button style={myStyle}> */}
              <p>Shop Mens</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
