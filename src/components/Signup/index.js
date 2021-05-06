import React, { Component } from "react";
import "./styles.scss";

//This form uses the firebase utility file to actually sign up the user.
import { auth, handleUserProfile } from "./../../firebase/utils";

import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../forms/formInput";
import Button from "./../forms/Button";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: "",
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
    event.preventDefault(); //prevents the page from refreshing when user hits submit.
    //Next, deconstruct the state into the elements below.
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    //Next is validation.You don't want to proceed any further if the pw and conf pw don't match-
    //So, you return an error (err) if this happens.
    if (password !== confirmPassword) {
      const err = ["Passwords Do Not Match"];
      this.setState({
        errors: err,
      });
      return;
    }
    //To catch any errors that occur, add a "Try Catch":
    try {
      //async await returns a promise. Destructure the user object below:
      const { user } = await auth.createUserWithEmailAndPassword(
        //this method expects the below:
        email,
        password
      );
      await handleUserProfile(user, { displayName }); //Once the user is signed up and registered,
      //we want to restore the initial state (below), and simply reset the form.
      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log(err);
    }
  };

  //We also want to render an error if there is one.
  //So we destructure the error method array in here too.
  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state; //destructure displayName, email, pw, cpw, and errors from state.
    const configAuthWrapper = {
      headline: "Registration",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {/* Below: If the errors length is greater than 0, then return an unordered
            list and and map through that error's array to show all the errors. */}
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return <li key={index}>{err}</li>;
              })}
              ;
            </ul>
          )}
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
      </AuthWrapper>
    );
  }
}

export default Signup;
