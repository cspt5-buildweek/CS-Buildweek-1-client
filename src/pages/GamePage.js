import React, { /*useContext,*/ useState } from 'react';
// import { UserContext } from '../hooks/useUserContext';

import styled from 'styled-components';

import { buildMap_1 } from '../mockData/fakeMap';
import { useLogOnChange } from '../hooks/misc';
import GameMap from '../components/GameMap';
import InfoBar from "../components/BottomNav/InfoBar";

const PageWrapper = styled.div`
  flex: 1;
  height: 100%;
`;

const GamePage = () => {
  // const userData = useContext(UserContext);

  const [mapData] = useState(buildMap_1());
  useLogOnChange('Map', mapData);

  const [currentRoom, setCurrentRoom] = useState(mapData.startRoom);
  useLogOnChange('currentRoom', currentRoom);

  const handleMovePlayer = (dir) => () => {
    const linkInDir = mapData.roomsDict[currentRoom].links[dir];
    if (linkInDir) { // check if current room has an exit in that direction
      setCurrentRoom(mapData.roomsDict[linkInDir.next_room].id); // get the id of next room in that direction
    } else {
      console.error('no path in that direction');
    }
  };
  
  return (
    <PageWrapper>
      <GameMap mapData={mapData} currentRoom={currentRoom} />
      <InfoBar movePlayer={handleMovePlayer} />
    </PageWrapper>
  );
};

export default GamePage;