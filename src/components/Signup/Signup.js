import React, { Component } from "react";
import axios from "axios";
import SignForm from "./SignForm";

export class Signup extends Component {
  onSubmitHandler =  values => {
    const {name,email,password} = values
    const url = "http://localhost:8000/auth/signup";
      axios.post(url,{name,email,password} ).then(res =>{
        console.log(res)
      // this.setState({
      //   user: res.data
      // })
    })
    
  };

  render() {
    console.log(this.props);
    return <SignForm onSubmitHandler={this.onSubmitHandler} />;
  }
}
