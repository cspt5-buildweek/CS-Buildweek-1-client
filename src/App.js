import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";

import LoginPage from "./Views/LoginPage";

function App() {
  return (
    <div className="App">
      <h1>NAV</h1>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
