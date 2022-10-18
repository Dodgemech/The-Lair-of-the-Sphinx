const router = require('express').Router();
const { Monster, MonsterRiddle, Riddle, User } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.userID
    });
});

router.get('/signup', (req, res) => {
    res.render('signup', {
      loggedIn: req.session.userID
    });
  });

router.get('/login', (req, res) => {
    res.render('login', {
      loggedIn: req.session.userID
    });
  });

router.get('/account', (req, res) => {
    res.render('account', {
        loggedIn: req.session.userID
    });
  });

router.get('/info', (req, res) => {
    res.render('info', {
        loggedIn: req.session.userID
    });
  });





module.exports = router;