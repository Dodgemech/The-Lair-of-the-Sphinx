const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { User, Monster, Riddle, MonsterRiddle } = require('../models')
const bcrypt = require('bcrypt');
class Scores extends Model {};

Scores.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'score'
    }

)

module.exports = Scores;