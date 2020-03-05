
const rooms_1 = [
  {
    id: 1,
    name: 'Entry Hall',
    desc: 'start here',
    coords: [1, 1]
  },
  {
    id: 2,
    name: 'Room 2',
    desc: 'not much here',
    coords: [1, 2]
  },
  {
    id: 3,
    name: 'kitchen',
    desc: 'food here',
    coords: [2, 2]
  },
  {
    id: 4,
    name: 'barracks',
    desc: 'lots of beds',
    coords: [1, 3]
  },
  {
    id: 5,
    name: 'treasure vault',
    desc: 'all the loot',
    coords: [0, 3]
  },
  {
    id: 6,
    name: '6',
    coords: [3, 0]
  },
  {
    id: 7,
    name: '7',
    coords: [4, 0]
  },
  {
    id: 8,
    name: '8',
    coords: [5, 0]
  }
];

const halls_1 = [
  {
    id: 1,
    nodes: {
      1: { to: 2, dir: 's' },
      2: { to: 1, dir: 'n' }
    }
  },
  {
    id: 2,
    nodes: {
      2: { to: 3, dir: 'e' },
      3: { to: 2, dir: 'w' }
    }
  },
  {
    id: 3,
    nodes: {
      2: { to: 4, dir: 's' },
      4: { to: 2, dir: 'n' }
    }
  },
  {
    id: 4,
    nodes: {
      4: { to: 5, dir: 'w' },
      5: { to: 4, dir: 'e' }
    }
  }
];

export const buildMap_1 = () => {
  const map = {};

  map.roomsDict = rooms_1.reduce((dict, room) => {

    room.links = halls_1.reduce((links, hall) => {
      if (hall.nodes[room.id]) {
        links[hall.nodes[room.id].dir] = { hall_id: hall.id, next_room: hall.nodes[room.id].to };
        return links;
      } else {
        return links;
      }
    }, {});

    dict[room.id] = room;
    return dict;
  }, {});

  map.linksDict = halls_1.reduce((dict, hall) => {
    dict[hall.id] = hall;
    return dict;
  }, {});

  map.startRoom = 1;

  return map;
};