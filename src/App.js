import React, { useState } from "react";
import axios from "axios";
import * as d3 from "d3";
import { Graph } from "react-d3-graph";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";

import LoginPage from "./Views/LoginPage";
import RegistrationPage from "./Views/RegistrationPage";

const data = {
  nodes: [{ id: "Cliff Edge" }, { id: "North Room" }, { id: "Cave" }],
  links: [
    { source: "Cliff Edge", target: "North Room" },
    { source: "Cliff Edge", target: "Cave" }
  ]
};

const myConfig = {
  automaticRearrangeAfterDropNode: false,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  height: 400,
  highlightDegree: 1,
  highlightOpacity: 1,
  linkHighlightBehavior: false,
  maxZoom: 8,
  minZoom: 0.1,
  nodeHighlightBehavior: false,
  panAndZoom: false,
  // staticGraph: true,
  staticGraphWithDragAndDrop: false,
  width: 800,
  d3: {
    alphaTarget: 0.0,
    gravity: -100,
    linkLength: 100,
    linkStrength: 1
  },
  node: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 8,
    fontWeight: "normal",
    highlightColor: "SAME",
    highlightFontSize: 8,
    highlightFontWeight: "normal",
    highlightStrokeColor: "SAME",
    highlightStrokeWidth: "SAME",
    labelProperty: "id",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: true,
    size: 200,
    strokeColor: "none",
    strokeWidth: 1.5,
    svg: "",
    symbolType: "circle"
  },
  link: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 8,
    fontWeight: "normal",
    highlightColor: "#d3d3d3",
    highlightFontSize: 8,
    highlightFontWeight: "normal",
    labelProperty: "label",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: false,
    semanticStrokeWidth: false,
    strokeWidth: 1.5,
    markerHeight: 6,
    markerWidth: 6
  }
};

function App() {
  const [direction, setDirection] = useState("");

  const handleClick = e => {
    e.preventDefault();
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init", {
        headers: {
          Authorization: `Token ${localStorage.getItem("loginKey")}`
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };
  const handleMove = e => {
    e.preventDefault();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/adv/move", {
        headers: {
          Authorization: `Token ${localStorage.getItem("loginKey")}`
        },
        direction
      })
      .then(response => console.log(response));
  };

  return (
    <div className="App">
      <h1>NAV</h1>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <div style={{ pointerEvents: "none" }}>
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
        />
      </div>

      <input
        type="text"
        value={direction}
        onChange={e => setDirection(e.target.value)}
      />
      <button type="submit" onClick={handleMove}>
        Move
      </button>
      <button type="submit" onClick={handleClick}>
        Init
      </button>
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
