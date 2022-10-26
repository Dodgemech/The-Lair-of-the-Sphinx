//Import models
const Monster = require('./Monster');
const Riddle = require('./Riddle');
const User = require('./User');
const MonsterRiddle = require('./MonsterRiddle');

Monster.belongsToMany(Riddle, {
    through: MonsterRiddle,
    foreignKey:'monster_id'
});

Riddle.belongsToMany(Monster, {
    through: MonsterRiddle,
    foreignKey: 'riddle_id'
});

User.belongsTo(Monster, {
    foreignKey: 'monster_id'
});

Monster.hasMany(User, {
    foreignKey: 'monster_id'
});


module.exports = {
    Monster,
    Riddle,
    User,
    MonsterRiddle
};