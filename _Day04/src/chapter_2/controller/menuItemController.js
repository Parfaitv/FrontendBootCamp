const { MenuItem } = require('../models/menuitem');
const { Order } = require('../models/order');

class MenuItemController {
    async getAllMenuItem(req, res) {
        try {
            const collection = await MenuItem.findAll();
            return res.json(collection)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }
}


module.exports = new MenuItemController()