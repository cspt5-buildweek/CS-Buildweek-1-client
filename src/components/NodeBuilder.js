import React from 'react';

const NodeBuilder = ({ mapData, currentRoom }) => {
  return (
    <g>
      {Object.values(mapData.roomsDict).map(node => (
        <g key={node.id}>
          <circle
            cx={node.coords[0]}
            cy={node.coords[1]}
            r="0.3"
            fill="#084538"
          />
          <text
            x={node.coords[0]}
            y={node.coords[1] - (currentRoom === node.id ? 0.2 : 0)}
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