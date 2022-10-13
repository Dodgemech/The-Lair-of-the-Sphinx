const router = require('express').Router();

monsterRoutes = require('./monster-routes');

router.use('/monsters', monsterRoutes);

module.exports = router;