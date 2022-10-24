const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Monster } = require('../models')
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password)
    }
}

User.init(
    {
        //Account Information
        id: { //We should make this not just a single number. Would be better to have random IDs
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [7]
            }
        },
        //Character information
        character_name: {
            type: DataTypes.STRING(20),
            allowNull:false,
        },
        character_gender: { //How we will determine the image to use for character's profile
            type: DataTypes.STRING,
            allowNull: false
        },
        character_health: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        character_level: { //May not need this for MVP, but could be useful later on
            type: DataTypes.INTEGER,
            allowNull:false 
        },
        character_score: {
            type: DataTypes.INTEGER,
        },
        monster_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Monster,
                key: 'id'
            },
            default: 1
        }
    },
    {
        hooks: { //hashed PW so that its not plain text
            async beforeCreate(newUserInfo) {
                newUserInfo.password = await bcrypt.hash(newUserInfo.password,10);
                return newUserInfo;
            },
            async beforeUpdate(updatedUserInfo) {
                updatedUserInfo.password = await bcrypt.hash(updatedUserInfo.password,10);
                return updatedUserInfo;
            }
        },
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;