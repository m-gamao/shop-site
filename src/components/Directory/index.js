import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import beach2 from "./../../assets/beach2.jpeg";
import ski2 from "./../../assets/ski2.jpeg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="image"
          style={{
            backgroundImage: `url(${beach2})`,
          }}
        >
          <Link to="/search/womens">
            <Button className="button">
              {/* <Button style={myStyle}> */}
              <p>SHOP SURF</p>
            </Button>
          </Link>
        </div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${ski2})`,
          }}
        >
          <Link to="/search/mens">
            <Button className="button">
              {/* <Button style={myStyle}> */}
              <p>SHOP SNOW</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
