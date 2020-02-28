import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";

import LoginPage from "./Views/LoginPage";
import RegistrationPage from "./Views/RegistrationPage";

function App() {
  return (
    <div className="App">
      <h1>NAV</h1>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
