import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import beach1 from "./../../assets/beach1.jpeg";
import ski2 from "./../../assets/ski2.jpeg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="image1"
          style={{
            backgroundImage: `url(${beach1})`,
          }}
        >
          <Link to="/search/womens">
            <Button className="button1">
              {/* <Button style={myStyle}> */}
              <p>SHOP SURF</p>
            </Button>
          </Link>
        </div>
        <div
          className="image2"
          style={{
            backgroundImage: `url(${ski2})`,
          }}
        >
          <Link to="/search/mens">
            <Button className="button2">
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
