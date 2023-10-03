const sequelize = require('../db');
const {DataTypes} = require('sequelize')


const MenuItem = sequelize.define("MenuItem", {
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    callQuantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
}, {
    timestamps: false
});


module.exports = { MenuItem }

