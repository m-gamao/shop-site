import React, { Component } from "react";
import "./styles.scss";

import { auth, handleUserProfile } from "./../../firebase/utils";

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state; //destructure displayName and email from state.
    return (
      <div className="signup">
        <div className="wrap">
          <h2>Signup</h2>
          <div className="formWrap">
            <form>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Full name"
                onChange={this.handleChange}
              />
              <FormInput
                type="email"
                email="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />

              <Button type="submit">Register</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
