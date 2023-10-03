const sequelize = require('../db');
const {DataTypes} = require('sequelize')
const {Order} = require('./order')

const User = sequelize.define("User", {
    name: {type: DataTypes.STRING, unique:true},
    orders: {type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: []},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
}, {
    timestamps: false
});

User.hasMany(Order, {as: 'orderId', foreignKey: 'userId',});
Order.belongsTo(User, {foreignKey: 'userId', onDelete: 'CASCADE',});

module.exports = { User }
