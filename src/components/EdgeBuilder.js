import React from 'react';

const EdgeBuilder = ({ edges }) => {
  return (
    <g>
      {edges.map(edge => (
        <line
          key={edge.id}
          x1={edge.fromCoords[0]}
          x2={edge.toCoords[0]}
          y1={edge.fromCoords[1]}
          y2={edge.toCoords[1]}
          stroke="black"
          strokeWidth="0.2"
        />
      ))}
    </g>
  );
};

export default EdgeBuilder;