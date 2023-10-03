const {User} = require('../models/user');

class userController {

    async createUser(req, res) {
        try {
            const {name, password, role} = req.body
            const newUser = await User.create({name, password, role})
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(newUser)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }

    async checkUser(req, res) {
        try {
            const {name, password} = req.body
            const user = await User.findOne({where: {name}})
            if(!user) {
                return res.status(400).json('Пользователь с таким именем не найден')
            }
            const comparePassword = user.password === password
            if(!comparePassword) {
                return res.status(400).json('Указан неверный пароль')
            }
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(user)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }

    async getAllUser(req, res) {
        try {
            const collectionUser = await User.findAll()
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(collectionUser)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }

}

module.exports = new userController()