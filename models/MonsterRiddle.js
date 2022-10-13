//This model serves as the link between monster's and riddles
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class MonsterRiddle extends Model {}

MonsterRiddle. init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        monster_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'monster',
                ket: 'id'
            }
        },
        riddle_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'riddle',
                ket: 'id'
            }
        },

    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName: 'monster_riddle'
    }
)

module.exports = MonsterRiddle;