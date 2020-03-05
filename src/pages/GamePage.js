import React, { /*useContext,*/ useState } from 'react';
// import { UserContext } from '../hooks/useUserContext';

import { buildMap_1 } from '../mockData/fakeMap';
import { useLogOnChange } from '../hooks/misc';
import GameMap from '../components/GameMap';
import InfoBar from "../components/BottomNav/InfoBar";


const GamePage = () => {
  // const userData = useContext(UserContext);

  const [map] = useState(buildMap_1());
  useLogOnChange('Map', map);

  const [player, setPlayer] = useState({
    name: 'player_1',
    room: 1,
    position: map.roomsDict[1].coords
  });
  useLogOnChange('Player', player);

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
      <GameMap mapData={map} playerData={player} />
      <InfoBar movePlayer={handleMovePlayer} />
    </div>
  );
};

export default GamePage;