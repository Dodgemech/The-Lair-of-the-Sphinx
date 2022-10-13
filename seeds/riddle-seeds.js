const { Riddle } = require('../models');

const riddleData = [
    {
        question: 'Riddle 1',
        answers: ['apple','aple']
    },
    {
        question: 'Riddle 2',
        answers: ['dog','doog','dg']
    },
    {
        question: 'Riddle 3',
        answers: ['aa','a','aaa']
    },
    {
        question: 'Riddle 4',
        answers: ['mario','super mario']
    }
]

const seedRiddles = () => Riddle.bulkCreate(riddleData);

module.exports = seedRiddles;