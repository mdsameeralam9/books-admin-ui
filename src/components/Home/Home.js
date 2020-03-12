import React, { Component } from "react";
import HomeView from "./HomeView";

export class Home extends Component {
  
  render() {
    
    return (
      <HomeView {...this.props} />
    );
  }
}

