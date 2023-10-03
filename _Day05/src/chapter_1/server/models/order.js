const sequelize = require('../db');
const {DataTypes} = require('sequelize')
const {MenuItem} = require('./menuitem');

const Order = sequelize.define("Order", {
    isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
    items: {type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: []},
}, {
    timestamps: false
});

Order.hasMany(MenuItem, {as: 'menuItems', foreignKey: 'orderId'})
MenuItem.belongsTo(Order, {foreignKey: 'orderId', onDelete: 'CASCADE'})

module.exports = { Order }