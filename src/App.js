import React from "react";
import "./App.css";

import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Book } from "./components/Book";
import { Home } from "./components/Home";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="login" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/book" component={Book} />
        <Route path="/home" component={Home} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
