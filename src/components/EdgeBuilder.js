import React from 'react';

const EdgeBuilder = ({ mapData }) => {
  return (
    <g>
      {mapData.halls_list.map(edge => {
        const nodes = Object.values(edge.nodes);
        return (
          <line
            key={edge.id}
            x1={mapData.rooms[nodes[0].to].location[0]}
            x2={mapData.rooms[nodes[1].to].location[0]}
            y1={mapData.rooms[nodes[0].to].location[1]}
            y2={mapData.rooms[nodes[1].to].location[1]}
            stroke="black"
            strokeWidth="0.2"
          />
        );
      })}
    </g>
  );
};

export default EdgeBuilder;