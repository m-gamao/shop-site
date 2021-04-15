import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import mens1 from "./../../assets/mens1.jpeg";
import womens2 from "./../../assets/womens2.jpeg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="image"
          style={{
            backgroundImage: `url(${womens2})`,
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
            backgroundImage: `url(${mens1})`,
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
