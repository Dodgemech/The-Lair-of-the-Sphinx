const { MonsterRiddle } = require('../models');

const monsterRiddleData = [
    {
        monster_id: 1,
        riddle_id:1,
    },
    {
        monster_id: 1,
        riddle_id:2,
    },

    {
        monster_id: 2,
        riddle_id:2,
    },
    {
        monster_id: 2,
        riddle_id:3,
    },
    {
        monster_id: 2,
        riddle_id:4,
    },
    
    {
        monster_id: 3,
        riddle_id:1,
    },
    {
        monster_id: 3,
        riddle_id:2,
    },
    {
        monster_id: 3,
        riddle_id:3,
    },
    {
        monster_id: 3,
        riddle_id:4,
    },
]

const seedMonsterRiddles = () => MonsterRiddle.bulkCreate(monsterRiddleData);

module.exports = seedMonsterRiddles;