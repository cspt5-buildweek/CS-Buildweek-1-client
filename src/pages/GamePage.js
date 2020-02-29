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
    room: 1,
    position: map.roomsDict[1].coords
  });
  useLogOnChange('Player', player);

  // This is just some debug/testing stuff. making sure things keep working as expected
  // if new nodes get added later, after the inital load.
  const handleClick2 = () => {
    setMap(prev => ({
      ...prev,
      roomsDict: {
        ...prev.roomsDict,
        1: {
          ...prev.roomsDict[1],
          links: {
            ...prev.roomsDict[1].links,
            w: { hall_id: 5, next_room: 7 }
          }
        },
        7: {
          id: 7,
          name: 'test',
          coords: [0, 1],
          links: {
            e: { hall_id: 5, next_room: 1 }
          }
        }
      },
      linksDict: {
        ...prev.linksDict,
        5: {
          id: 5,
          from: 1,
          to: 7,
          fromDir: 'w',
          toDir: 'e'
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
    if (map.roomsDict[player.room].links[dir]) { // check if current room has an exit in that direction
      setPlayer(prev => {
        const nextRoom = map.roomsDict[map.roomsDict[prev.room].links[dir].next_room]; // get the info on the next room in that direction
        return {
          ...prev,
          room: nextRoom.id,
          position: nextRoom.coords
        };
      });
    } else {
      console.error('no path in that direction');
    }
  };
  
  return (
    <div>
      <h2>GamePage</h2>
      <p>current user: {userData.name}</p>
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