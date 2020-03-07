import React, { Component } from "react";
import HomeForm from "./HomeForm";

export class Home extends Component {

  redirectToBook = e => {
    this.props.history.push("/book");
  }

  render() {
    console.log(this.props)
    return <HomeForm redirectToBook={this.redirectToBook} />;
  }
}

