import React, { useContext, useState } from 'react';
import { UserContext } from '../hooks/useUserContext';

import { buildMap_1 } from '../mockData/fakeMap';
import { useLogOnChange } from '../hooks/misc';
import GameMap from '../components/GameMap';


const GamePage = () => {
  const userData = useContext(UserContext);
  const [map, setMap] = useState(buildMap_1());
  useLogOnChange('Map', map);

  const [player, setPlayer] = useState({
    name: 'player_1',
    position: map && map.roomsDict[1].coords
  });
  useLogOnChange('Player', player);

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
          id: 7,
          name: 'test',
          coords: [0, 1]
        }
      }
    }));
  };

  const handleClick3 = () => {
    setMap(prev => ({
      ...prev,
      roomsDict: {
        ...prev.roomsDict,
        8: {
          id: 8,
          name: 'test_2',
          coords: [3, 4]
        }
      }
    }));
  };

  const handleMovePlayer = (dir) => () => {
    switch (dir) {
      case 'n':
        console.log('move north');
        setPlayer(prev => ({
          ...prev,
          position: [prev.position[0], prev.position[1] - 1]
        }));
        break;
      case 's':
        console.log('move south');
        setPlayer(prev => ({
          ...prev,
          position: [prev.position[0], prev.position[1] + 1]
        }));
        break;
      case 'e':
        console.log('move east');
        setPlayer(prev => ({
          ...prev,
          position: [prev.position[0] + 1, prev.position[1]]
        }));
        break;
      case 'w':
        console.log('move west');
        setPlayer(prev => ({
          ...prev,
          position: [prev.position[0] - 1, prev.position[1]]
        }));
        break;
      default:
        console.error('Invalid dir in handleMovePlayer');
    }
  };
  
  return (
    <div>
      <h2>GamePage</h2>
      <p>{userData.name}</p>
      <GameMap mapData={map} playerData={player} />
      <div>
        <button onClick={handleMovePlayer('n')}>
          North
        </button>
        <button onClick={handleMovePlayer('s')}>
          South
        </button>
        <button onClick={handleMovePlayer('e')}>
          East
        </button>
        <button onClick={handleMovePlayer('w')}>
          West
        </button>
      </div>
      <div>  
        <button onClick={handleClick}>
          test name change
        </button>
        <button onClick={handleClick2}>
          test 2
        </button>
        <button onClick={handleClick3}>
          test 3
        </button>
      </div>
    </div>
  );
};

export default GamePage;