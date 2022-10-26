const checkStats = (req, res, next) => {
    if (req.session.hp > 0 && req.session.level <= 20) {
        res.redirect('/battle');
    }
    else
    {
        next();
    }
};

module.exports = checkStats