const router = require('express').Router();
const {User, Monster} = require('../../models');

//GET ROUTES-------------------------------------
//get all users
router.get('/', (req,res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(response => res.json(response))
    .catch( err => {
        console.log('an error occured');
        console.log(err);
        res.status(500).json(err);
    });
});

//get user by id

//POST ROUTES-------------------------------------
//make new user
router.post('/', async (req,res) => {
    //before making user, check to see if one already exists with same username
    const userExists = await User.findOne({
        where: {
            username: req.body.username
        }
    });
    if (userExists) {
        console.log('User could not be created as someone with that username already exists in the DB');
        res.status(409).json({ message: 'User Exists Already'}); // <= There may be a better status code than 409
        return;
    }

    User.create({
        username: req.body.username,
        password: req.body.password,
        character_name: req.body.character_name,
        character_gender: req.body.character_gender,
        character_health: 100,
        character_level: 1
    })
    .then(userData => {
        //!!! - SET UP SESSION HERE
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;