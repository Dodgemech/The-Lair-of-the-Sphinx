//Import models
const Monster = require('./Monster');
const Riddle = require('./Riddle');
const User = require('./User');
const Scores = require('./Scores');
const MonsterRiddle = require('./MonsterRiddle');

Monster.belongsToMany(Riddle, {
    through: MonsterRiddle,
    foreignKey:'monster_id'
});

Riddle.belongsToMany(Monster, {
    through: MonsterRiddle,
    foreignKey: 'riddle_id'
});

Scores.belongsTo(User, {
    foreignKey: 'score_id'
});


module.exports = {
    Monster,
    Riddle,
    User,
    MonsterRiddle,
    Scores
};