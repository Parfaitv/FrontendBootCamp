const {Sequelize} = require('sequelize');
const {development} = require('./config/config.json')

module.exports = new Sequelize(
    development.database,
    development.username,
    development.password,
    {
        dialect: 'postgres',
        host: development.host,
        port: 5432
    }
)