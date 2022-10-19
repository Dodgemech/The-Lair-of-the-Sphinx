const router = require('express').Router();

const apiRoutes = require('./api');

const pageRoutes = require('./pageRoutes');

router.use('/api', apiRoutes);
router.use('/', pageRoutes);



//For Incorrect Requests
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;