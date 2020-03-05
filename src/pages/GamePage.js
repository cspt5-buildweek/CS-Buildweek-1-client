import React, { /*useContext,*/ useState, useEffect } from 'react';
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

const arrowBinds = {
  ArrowUp: 'n',
  ArrowDown: 's',
  ArrowLeft: 'w',
  ArrowRight: 'e'
};

const GamePage = () => {
  // const userData = useContext(UserContext);

  const [mapData] = useState(buildMap_1());
  useLogOnChange('Map', mapData);

  const [currentRoom, setCurrentRoom] = useState(mapData.startRoom);
  useLogOnChange('currentRoom', currentRoom);

  const handleMovePlayer = (dir) => () => {
    setCurrentRoom(prev => {
      const linkInDir = mapData.roomsDict[prev].links[dir]; // look for a link in the given direction
      if (linkInDir) {
        return mapData.roomsDict[linkInDir.next_room].id; // get the id of the room in that direction if it exists
      } else {
        console.error('no path in that direction');
        return prev;
      }
    });
  };

  const arrowHandler = ({ key }) => {
    if (!arrowBinds[key]) return; // not an arrow key, ignore

    handleMovePlayer(arrowBinds[key])();
  };

  useEffect(() => {

    window.addEventListener('keydown', arrowHandler);

    return () => {
      window.removeEventListener('keydown', arrowHandler);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <PageWrapper>
      <GameMap mapData={mapData} currentRoom={currentRoom} />
      <InfoBar movePlayer={handleMovePlayer} />
    </PageWrapper>
  );
};

export default GamePage;