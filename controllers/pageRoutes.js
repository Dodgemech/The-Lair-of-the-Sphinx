const router = require('express').Router();
const { Monster, MonsterRiddle, Riddle, User, Scores } = require('../models');
const authenticate = require('../utils/auth');

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


  router.get('/battle', authenticate, (req, res) => {
    res.render('battle', {
      loggedIn: req.session.loggedIn,
      characterName: req.session.characterName,
      username: req.session.username,
      hp: req.session.hp,
      level: req.session.level,
      riddleIndex: req.session.riddleIndex
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

  router.get('/stats', authenticate, (req, res) => {
    res.render('stats', {
      loggedIn: req.session.loggedIn,
      characterName: req.session.characterName,
      characterGender: req.session.characterGender,
      username: req.session.username,
      hp: req.session.hp,
      level: req.session.level,
      riddleIndex: req.session.riddleIndex
    });
  
  });

router.get('/game-over', (req, res) => {
  res.render('game-over', {
    loggedIn: req.session.loggedIn,
    characterName: req.session.characterName,
    username: req.session.username,
    hp: req.session.hp,
    characterScore: req.session.characterScore,
  })
})

module.exports = router;