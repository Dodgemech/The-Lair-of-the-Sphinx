const router = require('express').Router();
const { Monster, MonsterRiddle, Riddle, User, Scores } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      characterName: req.session.characterName,
      username: req.session.username,
      hp: req.session.hp,
      level: req.session.level

  });
});

router.get('/signup', (req, res) => {
    res.render('signup', {
      loggedIn: req.session.loggedIn,
      characterName: req.session.characterName,
      username: req.session.username,
      hp: req.session.hp,
      level: req.session.level
    });
  });

router.get('/login', (req, res) => {
    res.render('login', {
      loggedIn: req.session.loggedIn,
      characterName: req.session.characterName,
      username: req.session.username,
      hp: req.session.hp,
      level: req.session.level
    });
  });

router.get('/account', (req, res) => {
  res.render('account', {
    loggedIn: req.session.loggedIn,
    characterName: req.session.characterName,
    username: req.session.username,
    hp: req.session.hp,
    level: req.session.level
  });
});

router.get('/battle', (req, res) => {
  res.render('battle', {
    loggedIn: req.session.loggedIn,
    characterName: req.session.characterName,
    username: req.session.username,
    hp: req.session.hp,
    level: req.session.level
  });
});

router.get('/info', (req, res) => {
    res.render('info', {
      loggedIn: req.session.loggedIn,
      characterName: req.session.characterName,
      username: req.session.username,
      hp: req.session.hp,
      level: req.session.level
    });
  });

router.get('/high_scores', (req, res) => {
  res.render('score', {
    loggedIn: req.session.loggedIn,
    characterName: req.session.characterName,
    username: req.session.username,
    hp: req.session.hp,
    characterScore: req.session.characterScore,
  })
})



module.exports = router;