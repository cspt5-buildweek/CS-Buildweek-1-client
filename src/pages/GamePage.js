import React, { useContext, useState } from 'react';
import { UserContext } from '../hooks/useUserContext';

import { buildMap_1 } from '../mockData/fakeMap';
import { useLogOnChange } from '../hooks/misc';
import GameMap from '../components/GameMap';


const GamePage = () => {
  const userData = useContext(UserContext);
  const [map, setMap] = useState(buildMap_1());
  useLogOnChange('Map', map);

  const handleClick = () => {
    setMap(prev => ({
      ...prev,
      roomsDict: {
        ...prev.roomsDict,
        1: {
          ...prev.roomsDict[1],
          name: 'test'
        }
      }
    }));
  };

  const handleClick2 = () => {
    setMap(prev => ({
      ...prev,
      roomsDict: {
        ...prev.roomsDict,
        7: {
          name: 'test'
        }
      }
    }));
  };
  
  return (
    <div>
      <h2>GamePage</h2>
      <p>{userData.name}</p>
      <GameMap mapData={map} />
      <button onClick={handleClick}>
        test name change
      </button>
      <button onClick={handleClick2}>
        test 2
      </button>
    </div>
  );
};

export default GamePage;