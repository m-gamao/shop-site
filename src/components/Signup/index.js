import React, { Component } from "react";
import "./styles.scss";

//This form uses the firebase utility file to actually sign up the user.
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

  handleFormSubmit = async (event) => {
    e.preventDefault(); //prevents the page from refreshing when user hits submit.
    //Next, deconstruct the state into the elements below.
    const { displayName, email, password, confirmPassword } = this.state;

    //Next is validation.You don't want to proceed any further if the pw and conf pw don't match:
    if (password !== confirmPassword) {
      const err = ["Password Don\'t match];
      
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state; //destructure displayName and email from state.
    return (
      <div className="signup">
        <div className="wrap">
          <h2>Signup</h2>
          <div className="formWrap">
            <form onSubmit={this.handleFormSubmit}>
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
