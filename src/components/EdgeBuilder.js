import React from 'react';

const EdgeBuilder = ({ mapData }) => {
  return (
    <g>
      {Object.values(mapData.linksDict).map(edge => {
        const nodes = Object.values(edge.nodes);
        return (
          <line
            key={edge.id}
            x1={mapData.roomsDict[nodes[0].to].coords[0]}
            x2={mapData.roomsDict[nodes[1].to].coords[0]}
            y1={mapData.roomsDict[nodes[0].to].coords[1]}
            y2={mapData.roomsDict[nodes[1].to].coords[1]}
            stroke="black"
            strokeWidth="0.2"
          />
        );
      })}
    </g>
  );
};

export default EdgeBuilder;