import React from "react";
import "./App.css";

import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Book } from "./components/Book";
import { Home } from "./components/Home";


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App(props) {
  return (
    
      <Switch>
        
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        
        <Route path="/home" component={Home} />
        <Redirect exact from="/" to="login" />
      </Switch>
  );
}

export default App;
