const router = require('express').Router();
const {Scores, User,} = require('../../models');

router.get('/', (req,res) => {
    Scores.findAll({
        include:[
            {
                model: User,
                attributes: ['username', 'character_name', 'character_health', 'character_score']
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

router.get('/:id', (req,res) => {
    Scores.findOne({
        include:[
            {
                model: User,
                attributes: ['username', 'character_name', 'character_health', 'character_score']
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(response => {
        if (!response) {
            res.status(404).json({ message: "404 Score not Found!"});
        }
        else {
            res.json(response);
        }
        
    })
    .catch( err => {
        console.log('an error occured');
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;