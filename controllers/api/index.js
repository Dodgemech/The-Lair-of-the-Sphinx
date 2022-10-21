const router = require('express').Router();

//require the routers from the other files
scoreRoutes = require('./score-routes');
monsterRoutes = require('./monster-routes');
userRoutes = require('./user-routes');



//use said router when api path ends in /:thatPath
router.use('/scores', scoreRoutes);
router.use('/monsters', monsterRoutes);
router.use('/users', userRoutes);



module.exports = router;