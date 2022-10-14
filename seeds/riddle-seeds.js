const { Riddle } = require('../models');

const riddleData = [
    {
        question: 'Riddle 1',
        answers: 'apple'
    },
    {
        question: 'Riddle 2',
        answers: 'pear'
    },
    {
        question: 'Riddle 3',
        answers: 'orange'
    },
    {
        question: 'Riddle 4',
        answers: 'banana'
    }
]

const seedRiddles = () => Riddle.bulkCreate(riddleData);

module.exports = seedRiddles;