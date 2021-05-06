import React from "react";
import "./styles.scss";

const FormInput2 = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}
      <input className="formInput" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput2;
