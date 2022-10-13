//Import models
const Monster = require('./Monster');
const Riddle = require('./Riddle');
const MonsterRiddle = require('./MonsterRiddle');

Monster.belongsToMany(Riddle, {
    through: MonsterRiddle,
    foreignKey:'monster_id'
});

Riddle.belongsToMany(Monster, {
    through: MonsterRiddle,
    foreignKey: 'riddle_id'
});

module.exports = {
    Monster,
    Riddle,
    MonsterRiddle
};