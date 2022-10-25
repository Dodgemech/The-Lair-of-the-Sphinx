const { MonsterRiddle } = require('../models');

const monsterRiddleData = [
    {
        monster_id: 1,
        riddle_id:1,
    },
    {
        monster_id: 1,
        riddle_id:17,
    },
    //--------------------------------------- 
    {
        monster_id: 2,
        riddle_id:2,
    },
    {
        monster_id: 2,
        riddle_id:16,
    },
    {
        monster_id: 2,
        riddle_id:3,
    },
    //--------------------------------------- 
    {
        monster_id: 3,
        riddle_id:15,
    },
    {
        monster_id: 3,
        riddle_id:4,
    },
    {
        monster_id: 3,
        riddle_id:14,
    },
    
    //--------------------------------------- 
    {
        monster_id: 4,
        riddle_id:5,
    },
    {
        monster_id: 4,
        riddle_id:13,
    },
    {
        monster_id: 4,
        riddle_id:6,
    },
    //--------------------------------------- 
    {
        monster_id: 5,
        riddle_id:12,
    },
    {
        monster_id: 5,
        riddle_id:7,
    },
    {
        monster_id: 5,
        riddle_id:11,
    },
    //--------------------------------------- 
    {
        monster_id: 6,
        riddle_id:8,
    },{
        monster_id: 6,
        riddle_id:10,
    },
    {
        monster_id: 6,
        riddle_id:9,
    },
    //--------------------------------------- 
    {
        monster_id: 7,
        riddle_id:29,
    },
    {
        monster_id: 7,
        riddle_id:18,
    },
    {
        monster_id: 7,
        riddle_id:28,
    },
    //--------------------------------------- 
    {
        monster_id: 8,
        riddle_id:19,
    },
    {
        monster_id: 8,
        riddle_id:27,
    },
    {
        monster_id: 8,
        riddle_id:20,
    },
    //--------------------------------------- 
    {
        monster_id: 9,
        riddle_id:26,
    },
    {
        monster_id: 9,
        riddle_id:21,
    },
    {
        monster_id: 9,
        riddle_id:25,
    },
    //--------------------------------------- 
    {
        monster_id: 10,
        riddle_id:22,
    },
    {
        monster_id: 10,
        riddle_id:24,
    },
    {
        monster_id: 10,
        riddle_id:23,
    },
    //--------------------------------------- 
    {
        monster_id: 11,
        riddle_id:29,
    },
    {
        monster_id: 11,
        riddle_id:10,
    },
    {
        monster_id: 11,
        riddle_id:27,
    },
    //--------------------------------------- 
    {
        monster_id: 12,
        riddle_id:8,
    },
    {
        monster_id: 12,
        riddle_id:25,
    },
    {
        monster_id: 12,
        riddle_id:6,
    },
    //--------------------------------------- 
    {
        monster_id: 13,
        riddle_id:23,
    },
    {
        monster_id: 13,
        riddle_id:4,
    },
    {
        monster_id: 13,
        riddle_id:21,
    },
    //--------------------------------------- 
    {
        monster_id: 14,
        riddle_id:2,
    },
    {
        monster_id: 14,
        riddle_id:19,
    },
    {
        monster_id: 14,
        riddle_id:1,
    },
    //--------------------------------------- 
    {
        monster_id: 15,
        riddle_id:30,
    },
    {
        monster_id: 15,
        riddle_id:31,
    },
    {
        monster_id: 15,
        riddle_id:32,
    },
    //--------------------------------------- 
    {
        monster_id: 16,
        riddle_id:33,
    },
    {
        monster_id: 16,
        riddle_id:34,
    },
    {
        monster_id: 16,
        riddle_id:35,
    },
    {
        monster_id: 16,
        riddle_id:36,
    },
    //--------------------------------------- 
    {
        monster_id: 17,
        riddle_id:37,
    },
    {
        monster_id: 17,
        riddle_id:38,
    },
    {
        monster_id: 17,
        riddle_id:28,
    },
    {
        monster_id: 17,
        riddle_id:29,
    },

    //--------------------------------------- 
    {
        monster_id: 18,
        riddle_id:39,
    },
    {
        monster_id: 18,
        riddle_id:40,
    },
    {
        monster_id: 18,
        riddle_id:41,
    },
    {
        monster_id: 18,
        riddle_id:42,
    },
    //--------------------------------------- 
    {
        monster_id: 19,
        riddle_id:43,
    },
    {
        monster_id: 19,
        riddle_id:44,
    },
    {
        monster_id: 19,
        riddle_id:45,
    },
    {
        monster_id: 19,
        riddle_id:46,
    },
    //--------------------------------------- 
    {
        monster_id: 20,
        riddle_id:47,
    },
    {
        monster_id: 20,
        riddle_id:48,
    },
    {
        monster_id: 20,
        riddle_id:49,
    },
    {
        monster_id: 20,
        riddle_id:50,
    },
    {
        monster_id: 20,
        riddle_id:51,
    },
]

const seedMonsterRiddles = () => MonsterRiddle.bulkCreate(monsterRiddleData);

module.exports = seedMonsterRiddles;