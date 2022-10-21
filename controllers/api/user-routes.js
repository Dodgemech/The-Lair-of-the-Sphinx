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

// get route for currently logged in user
router.get('/current/now', (req, res) => {
    console.log('test');
    User.findOne({
        attributes: {exclude: ['password'] },
        //include: [], incase we need more data from other tables later
        where: {
            id: req.session.userID
        },
        include: [Monster]
        
    })
    .then(response => {
        if (!response) {
            res.status(500).json({ message: 'User Not Found' });
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
router.post('/', async (req, res) => {
    const userExists = await User.findOne({
        where: {
            username: req.body.username
        }
    });
    if (userExists){
        console.log('userExists----------------------');
        res.status(409).json({ message: "User exists already" })
        return;
    }
    try {
        const dbUser = await User.create(
            req.body
        )
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = dbUser.username;
            req.session.characterName = dbUser.character_name;
            req.session.level = 1;
            req.session.hp = 100;
            req.session.riddleIndex = 0;
            req.session.userID = dbUser.id;
            res.json('You are now logged in!')
         })
    } catch (err) {
        res.status(500).json(err);
    }
});
//Login Request
router.post('/login', async (req, res) => {
    try {
        const dbUser = await User.findOne({
            where: {
                username: req.body.username,
            }
        })
        if(!dbUser) {
            res.status(404).json('Username not found. Please try again or sign up.')
        }
        const pwValidate = dbUser.checkPassword(req.body.password);

        if(!pwValidate) {
            res.status(404).json('Incorrect password. Please try again.')
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = dbUser.username;
            req.session.characterName = dbUser.character_name;
            req.session.level = 1;
            req.session.hp = 100;
            req.session.riddleIndex = 0;
            req.session.userID = dbUser.id;
            res.json('You are now logged in!')
         })
    } catch (err) {
       console.log(err);
    }
});

//Logout Request
router.post('/logout', (req,res) => {
    //!!! - DESTROY SESSION HERE
    req.session.destroy(() => {
        res.json('You are logged out!')
    })
});


//Increase level request
router.post('/level-up',(req,res) => {
    try {
        req.session.level += 1;
        req.session.riddleIndex = 0;
        res.json('UPDATED LEVEL');
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/next-riddle',(req,res) => {
    try {
        req.session.riddleIndex += 1;
        res.json('UPDATED Riddle');
    }
    catch (err) {
        console.log(err);
    }
});

//Change HP
router.post('/update-hp',(req,res) => {
    hpChange = parseInt(req.body.hpChange);
    try {
        req.session.hp += hpChange;
        res.json('UPDATED HP');
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;