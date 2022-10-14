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
router.get('/:id', (req,res) => {
    User.findOne({
        attributes: {exclude: ['password'] },
        //include: [], incase we need more data from other tables later
        where: {
            id: req.params.id
        }
    })
    .then(response => {
        if (!response) {
            res.status(404).json({ message: 'User Not Found' });
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
})

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
//Login Request
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'User Not Found' });
            return;
        }
        
        const passwordValid = userData.checkPassword(req.body.password); // <= checkPassword() comes from the User model
        if (!passwordValid) {
            res.status(400).json({ message: 'Password is incorrect'});
            return;
        }

        //!!! - SET UP SESSION HERE
        res.json({ message: 'logged in!'});
    });
});

//Logout Request
router.post('/logout', (req,res) => {
    //!!! - DESTROY SESSION HERE
})

module.exports = router;