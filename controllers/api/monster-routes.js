const router = require('express').Router();
const {Monster, Riddle, MonsterRiddle} = require('../../models');

//
router.get('/', (req,res) => {
    Monster.findAll({
        include:[
            {
                model: Riddle,
                attributes: ['question', 'answers']
            }
        ]
    })
    .then(response => res.json(response))
    .catch( err => {
        console.log('an error occured');
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;