const {User} = require('../models/user');

class userController {
    async createUser(req, res) {
        try {
            const {name} = req.body
            const candidate = await User.findOne({where: {name}})
            if(candidate) return res.status(400).json('User already existser')
            const newUser = await User.create({name})
            return res.json(newUser)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }
    
    async getAllUser(req, res) {
        try {
            const collectionUser = await User.findAll()
            return res.json(collectionUser)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }
}

module.exports = new userController()