import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserContext from './store/UserContext';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';

function App() {
  const [userData, setUserData] = useState();

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <GamePage />
          </Route>
          
          <Route path="/login">
            <LoginPage />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
