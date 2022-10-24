const router = require('express').Router();
const {Monster, Riddle} = require('../../models');

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

router.get('/:id', (req,res) => {
    Monster.findOne({
        include:[
            {
                model: Riddle,
                attributes: ['question', 'answers']
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(response => {
        if (!response) {
            res.status(404).json({ message: "404 Monster not Found!"});
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