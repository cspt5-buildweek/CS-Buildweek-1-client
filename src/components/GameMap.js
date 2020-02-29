import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import { useLogOnChange } from '../hooks/misc';
import NodeBuilder from './NodeBuilder';
import EdgeBuilder from './EdgeBuilder';
import PlayerBuilder from './PlayerBuilder';

const SVGWrapper = styled(Paper)`
  padding: 2rem;
  margin: 2rem auto;
  width: 70%;
`;

const SVG = styled.svg`
  width: 100%;
  background-color: lightGrey;
`;

const GameMap = ({ mapData, playerData }) => {
  const [viewBox, setViewBox] = useState('0 0 0 0');
  useLogOnChange('viewBox', viewBox);

  const [edges, setEdges] = useState([]);
  useLogOnChange('edges', edges);
  
  useEffect(() => {
    // size viewbox to data
    const xOffset = d3.min(Object.values(mapData.roomsDict), room => room.coords[0]) - 2;
    const yOffset = d3.min(Object.values(mapData.roomsDict), room => room.coords[1]) - 2;
    const xRange = d3.extent(Object.values(mapData.roomsDict), room => room.coords[0]);
    const yRange = d3.extent(Object.values(mapData.roomsDict), room => room.coords[1]);
    const xSize = xRange[1] - xRange[0] + 4;
    const ySize = yRange[1] - yRange[0] + 4;
    setViewBox(`${xOffset} ${yOffset} ${xSize} ${ySize}`);

    // create an edges array with start and end coordinates
    const edgeList = Object.values(mapData.linksDict).map(edge => ({
      ...edge,
      fromCoords: mapData.roomsDict[edge.from].coords,
      toCoords: mapData.roomsDict[edge.to].coords
    }));
    setEdges(edgeList);
  }, [mapData]);

  return (
    <div>
      <h4>GameMap</h4>
      <SVGWrapper>
        <SVG viewBox={viewBox}>
          <circle r="0.12" cx="0" cy="0" fill="#1000b4" />
          <circle r="0.04" cx="0" cy="0" fill="black" />
          <text
            x="0"
            y="0"
            fontSize="0.3"
          >
            (0,0)
          </text>
          <EdgeBuilder edges={edges} />
          <NodeBuilder nodes={Object.values(mapData.roomsDict)} />
          <PlayerBuilder playerData={playerData} />
        </SVG>
      </SVGWrapper>
    </div>
  ); 
};

export default GameMap;
