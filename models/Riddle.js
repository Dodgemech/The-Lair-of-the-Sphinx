const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Riddle extends Model {}

Riddle. init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        question: { //Riddle's text
            type: DataTypes.STRING,
            allowNull: false
        },
        answers: { //acceptable answers for the riddle 
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName: 'riddle'
    }
)

module.exports = Riddle;