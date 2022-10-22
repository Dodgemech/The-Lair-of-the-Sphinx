const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Monster extends Model {}

Monster.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        name: { //Monster's Name
            type: DataTypes.STRING,
            allowNull: false
        },
        strength: { //How much damage it can do to player
            type:DataTypes.INTEGER,
            allowNull: false
        },
        image: { //This will contain a string with the path to monster's image
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName: 'monster'
    }
)

module.exports = Monster;