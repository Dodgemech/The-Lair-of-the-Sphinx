const router = require('express').Router();
const { Monster, MonsterRiddle, Riddle, User } = require('../models');


router.get('/', (req, res) => {
    res.render('login');
});



module.exports = router;