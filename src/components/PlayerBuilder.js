import React from 'react';

const PlayerBuilder = ({ playerData }) => {
  return (
    <g>
      <rect
        x={playerData.position[0]}
        y={playerData.position[1]}
        width="0.2"
        height="0.2"
        fill="pink"
      />
    </g>
  )
};

export default PlayerBuilder;