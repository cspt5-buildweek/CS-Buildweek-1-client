import React from 'react';

const NodeBuilder = ({ mapData, currentRoom }) => {
  return (
    <g>
      {Object.values(mapData.rooms).map(node => (
        <g key={node.id}>
          <circle
            cx={node.location[0]}
            cy={node.location[1]}
            r="0.3"
            fill="#084538"
          />
          <text
            x={node.location[0]}
            y={node.location[1] - (currentRoom.id === node.id ? 0.2 : 0)}
            fontSize="0.15"
            fill="crimson"
            textAnchor="middle"
          >
            {node.name}
          </text>
        </g>
      ))}
    </g>
  );
};

export default NodeBuilder;