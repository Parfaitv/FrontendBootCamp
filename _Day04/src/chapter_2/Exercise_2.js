const sequelize = require('./db');
const express = require('express');
const bodyParser = require("body-parser");
const router = require('./routes/index')



const PORT = 3000

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, async () => console.log(`\n=============================
App listening on port ${PORT}! |
=============================\n`))
    } catch (error) {
        console.log(error);
    }
}

start()

