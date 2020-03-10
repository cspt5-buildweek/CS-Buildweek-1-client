import React, { /*useContext,*/ useState, useEffect } from 'react';
// import { UserContext } from '../hooks/useUserContext';

import styled from 'styled-components';

import { get_map } from '../mockData/fakeMap';
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

  const [mapData, setMapData] = useState(null);
  useLogOnChange('Map', mapData);

  const [currentRoom, setCurrentRoom] = useState(null);
  useLogOnChange('currentRoom', currentRoom);

  useEffect(() => {
    get_map()
    .then(map => {
      setMapData(map);
      setCurrentRoom(map.start);
    });
  }, []);

  const handleMovePlayer = (dir) => {
    setCurrentRoom(prev => {
      const linkInDir = mapData.rooms[prev.id].halls[dir]; // look for a link in the given direction
      if (linkInDir) {
        return mapData.rooms[linkInDir]; // get the id of the room in that direction if it exists
      } else {
        console.error('no path in that direction');
        return prev;
      }
    });
  };

  const arrowHandler = ({ key }) => {
    if (!arrowBinds[key]) return; // not an arrow key, ignore

    handleMovePlayer(arrowBinds[key]);
  };

  useEffect(() => {

    window.addEventListener('keydown', arrowHandler);

    return () => {
      window.removeEventListener('keydown', arrowHandler);
    };
  }, [mapData]); // eslint-disable-line react-hooks/exhaustive-deps
  
  if (!mapData || !currentRoom) {
    console.log('LOADING MAP');
    return <h2>Loading!</h2>
  }

  return (
    <PageWrapper>
      <button onClick={get_map}>GET MAP</button>
      <GameMap mapData={mapData} currentRoom={currentRoom} />
      <InfoBar movePlayer={handleMovePlayer} />
    </PageWrapper>
  );
};

export default GamePage;