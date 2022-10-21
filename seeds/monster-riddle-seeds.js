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
    //--------------------------------------- 
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
    //--------------------------------------- 
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
    //--------------------------------------- 
    {
        monster_id: 4,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 5,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 6,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 7,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 8,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 9,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 10,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 11,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 12,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 13,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 14,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 15,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 16,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 17,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 18,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 19,
        riddle_id:4,
    },
    //--------------------------------------- 
    {
        monster_id: 20,
        riddle_id:4,
    },

]

const seedMonsterRiddles = () => MonsterRiddle.bulkCreate(monsterRiddleData);

module.exports = seedMonsterRiddles;