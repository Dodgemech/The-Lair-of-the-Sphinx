const { Monster } = require('../models');

const monsterData = [
    {
        name: 'Gorgon',
        level: 1,
        strength: 1,
        image: 'Default'
    },
    {
        name: 'Ghost',
        level: 1,
        strength: 2,
        image: 'Default'
    },
    {
        name: 'Angry Ghost',
        level: 1,
        strength: 3,
        image: 'Default'
    },
    {
        name: 'Unusually Sized Rodent',
        level: 1,
        strength: 4,
        image: 'Default'
    },
    {
        name: 'Slime',
        level: 1,
        strength: 5,
        image: 'Default'
    },
    {
        name: 'Bat',
        level: 1,
        strength: 6,
        image: 'Default'
    },
    {
        name: 'Dragon',
        level: 1,
        strength: 7,
        image: 'Default'
    },
    {
        name: 'Goblin',
        level: 1,
        strength: 8,
        image: 'Default'
    },
    {
        name: 'Gains Goblin',
        level: 1,
        strength: 9,
        image: 'Default'
    },
    {
        name: 'Skeleton',
        level: 1,
        strength: 10,
        image: 'Default'
    },
    {
        name: 'Snake',
        level: 1,
        strength: 11,
        image: 'Default'
    },
    {
        name: 'Floating Eye',
        level: 1,
        strength: 12,
        image: 'Default'
    },{
        name: 'Death Spider',
        level: 1,
        strength: 13,
        image: 'Default'
    },
    {
        name: 'Vampire',
        level: 1,
        strength: 14,
        image: 'Default'
    },
    {
        name: 'Cursed Dragon',
        level: 1,
        strength: 15,
        image: 'Default'
    },
    {
        name: 'Blob',
        level: 1,
        strength: 16,
        image: 'Default'
    },
    {
        name: 'Tri-Death',
        level: 1,
        strength: 17,
        image: 'Default'
    },
    {
        name: 'Cursed Sword',
        level: 1,
        strength: 18,
        image: 'Default'
    },
    {
        name: 'Mandrake',
        level: 1,
        strength: 19,
        image: 'Default'
    },
    {
        name: 'Sphinex',
        level: 1,
        strength: 20,
        image: 'Default'
    }
]

const seedMonsters = () => Monster.bulkCreate(monsterData);

module.exports = seedMonsters;