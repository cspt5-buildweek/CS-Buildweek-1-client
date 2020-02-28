import React, { useContext } from 'react';
import { UserContext } from '../hooks/useUserContext';

const GamePage = () => {
  const userData = useContext(UserContext);
  return (
    <div>
      <h2>GamePage</h2>
      <p>{userData.name}</p>
    </div>
  );
};

export default GamePage;