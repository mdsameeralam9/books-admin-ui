import React, { Component } from "react";
import { login } from '../api/login-api';
import LoginForm from "./LoginForm";

export class Login extends Component {
  onSubmitHandler = async values => {
    const { email, password } = values;
    const payload = { email, password };
    const response = await login(payload);
    const { access_token } = response.data;
    if(access_token) {
      localStorage.setItem("access_token", access_token);
      this.props.history.push("/book");
    }
  };

  render() {
      console.log(this.props)
    return <LoginForm onSubmitHandler={this.onSubmitHandler} />;
  }
}
