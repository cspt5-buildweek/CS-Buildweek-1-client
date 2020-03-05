import React, { useEffect, useState, useRef } from 'react';
// import * as d3 from 'd3';

import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import { useLogOnChange } from '../hooks/misc';
import NodeBuilder from './NodeBuilder';
import EdgeBuilder from './EdgeBuilder';
// import PlayerBuilder from './PlayerBuilder';

const MapContainer = styled(Paper)`
  padding: 2rem;
  /* margin: 2rem auto; */
  height: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  /* width: 70%; */
`;

const SVGWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: lightGrey;
  position: absolute;
  left: 0;
  top: 0;
`;

const GameMap = ({ mapData, playerData }) => {
  const [heightOffset, setHeightOffset] = useState(0);
  useLogOnChange('heightOffset', heightOffset);

  const svgRef = useRef();
  
  useEffect(() => {
    const { width, height } = svgRef.current.getBoundingClientRect();
    const pixelsPerUnit = width / 10; // 10, because I chose to define the svg viewbox as 10 units wide.
    setHeightOffset(height / (2 * pixelsPerUnit)); // the number of svg units needed to vertically center the origin, for a specific element size
  }, []);

  return (
    <MapContainer>
      <h4>GameMap</h4>
      <SVGWrapper>
        <SVG ref={svgRef} viewBox={`-5 ${-heightOffset} 10 10`} preserveAspectRatio="xMinYMin slice">
          <circle r="0.12" cx="0" cy="0" fill="#1000b4" />
          <circle r="0.04" cx="0" cy="0" fill="black" />
          
          <g>
            <EdgeBuilder mapData={mapData} />
            <NodeBuilder mapData={mapData} />
          </g>
          {/* <PlayerBuilder playerData={playerData} /> */}
        </SVG>
      </SVGWrapper>
    </MapContainer>
  ); 
};

export default GameMap;
