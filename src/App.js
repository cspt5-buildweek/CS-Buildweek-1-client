import React from "react";
import "./App.css";


// Components
import InfoBar from "./Components/BottomNav/InfoBar";
import ChatBox from "./Components/ChatBox/ChatBox";

function App() {

  return (
    <div className="App">
      <nav>NAV</nav>
      <ChatBox />
    </div>
  );
}

export default App;
