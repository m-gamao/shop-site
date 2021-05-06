import React from "react";
import "./styles.scss";

//Wrap the headline in a conditional
const AuthWrapper = ({ headline, children }) => {
  return (
    <div className="authWrapper">
      <div className="wrap">
        {headline && <h2>{headline}</h2>}
        {children && children}
      </div>
    </div>
  );
};

export default AuthWrapper;
