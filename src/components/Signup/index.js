import React, { Component } from "react";
import "./styles.scss";

import FormInput from "./../forms/formInput";
import Button from "./../forms/Button";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleChange(e) {
    const {}=
  }
  render() {
    return (
      <div className="signup">
        <div className="wrap">
          <h2>Signup</h2>
          <form>
            <FormInput
              type="text"
              name="displayName"
              value=" "
              placeholder="Full name"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
