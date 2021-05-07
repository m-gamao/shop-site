import React, { Component } from "react";
import "./styles.scss";

import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";

const initialState = {
  email: "",
};

class EmailPassword extends Component {
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
      [name]: value, //The name in this instance is going to be email, below in the form field.
      //and the value is also the value in the form field as well.
    });
  }

  //Allows user to submit the form and capture the user's email. Needs to be integrated with firebase
  //so that user can submit the email and firebase can send them a reset password email.
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {
      //console.log(err)
    }
  };
  render() {
    const { email } = this.state;
    const configAuthWrapper = {
      headline: "Email Password",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default EmailPassword;
