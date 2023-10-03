const { MenuItem } = require('../models/menuitem');
const uuid = require('uuid')
const path = require('path')

class MenuItemController {
    async createMenuItem(req, res) {
        try {
            let {title, cost, callQuantity, description} = req.body
            const {picture} = req.files
            let fileName = uuid.v4() + '.jpg'
            await picture.mv(path.resolve(__dirname, '..', 'static', fileName))
            const menuItem = await MenuItem.create({title, cost, callQuantity, description, picture: fileName})
            return res.json(menuItem)
        } catch (e) {
            console.log(error);
            return res.status(400).json(error)
        }
    }

    async getAllMenuItem(req, res) {
        try {
            const collection = await MenuItem.findAll();
            res.header("Access-Control-Allow-Origin", "*");
            return res.json(collection)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }
}


module.exports = new MenuItemController()