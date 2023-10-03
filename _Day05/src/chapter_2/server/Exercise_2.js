const sequelize = require('./db');
const express = require('express');
const router = require('./routes/index')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path')


const PORT = 5000

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static' )))
app.use(fileUpload({}))
app.use('/', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, async () => console.log(`\nApp listening on port ${PORT}!`))
    } catch (error) {
        console.log(error);
    }
}

start()

