import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import useUserContext from './hooks/useUserContext';

// Components
import InfoBar from "./components/BottomNav/InfoBar";
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';

function App() {
  const { UserProvider, setValue } = useUserContext();

  return (
    <UserProvider>
      <BrowserRouter>
    
        <nav>NAV</nav>
    
        <Switch>

          <Route exact path="/">
            <GamePage />
          </Route>
          
          <Route path="/login">
            <LoginPage />
          </Route>
          
        </Switch>
        <button onClick={() => setValue({ name: 'test_2' })}>
          change
        </button>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
