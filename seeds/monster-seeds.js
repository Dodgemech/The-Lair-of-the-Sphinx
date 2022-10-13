const { Monster } = require('../models');

const monsterData = [
    {
        name: 'Goblin',
        level: 1,
        strength: 2,
        image: 'Default'
    },
    {
        name: 'Gains Goblin',
        level: 2,
        strength: 6,
        image: 'Default'
    },
    {
        name: 'Tri-Death',
        level: 3,
        strength: 5,
        image: 'Default'
    },
]

const seedMonsters = () => Monster.bulkCreate(monsterData);

module.exports = seedMonsters;