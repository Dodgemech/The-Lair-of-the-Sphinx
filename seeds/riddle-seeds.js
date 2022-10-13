const { Riddle } = require('../models');

const riddleData = [
    {
        question: 'Riddle 1',
        answers: 'apple'
    },
    {
        question: 'Riddle 2',
        answers: 'apple'
    },
    {
        question: 'Riddle 3',
        answers: 'apple'
    },
    {
        question: 'Riddle 4',
        answers: 'apple'
    }
]

const seedRiddles = () => Riddle.bulkCreate(riddleData);

module.exports = seedRiddles;