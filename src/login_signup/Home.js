import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Shop_owner/login/Login";
import Register from "./Shop_owner/register/Register";
function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registerShop">
          <Register />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
export default Home;
