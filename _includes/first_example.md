var nanoscope = require('nanoscope');


game = {
    player: {
        location: { x: 6, y: 10},
        color: 'Yellow',
        unnecessaryInformation: 'nobody-cares'
    },
    enemies: [
        {
            location: { x: 10, y: 20 },
            name: 'Pinky',
            traits: ['Mischievous','Persistent', 'Tricky']
        },
        {
            location: { x: 2, y: 22 },
            name: 'Clyde',
            traits: ['Ignorant', 'Goofy', '##$@??']
        }
    ],
    pelletLocations: [{ x: 10, y: 12 }, {x: 11, y: 15 }]
};

var lens = nanoscope(game);




game = lens.path('player.name.first').set('Pac-Man');










var firstGhostX = lens.following('enemies')
    .indexing(0)
    .following('location.x')
    .get();





game = lens.following('player.location')
    .plucking(['x', 'y'])
    .map(function (coordinate) {
        return coordinate + 1;
    });



var clydesTraits = lens.path('enemies')
    .filter(function (enemy) {
        return enemy.name === 'Clyde';
    })
    .index(0)
    .path('traits')
    .filter(/[a-zA-Z]/)
    .get();
