const { Order } = require('../models/order');
const { User } = require('../models/user');

class OrderController {
    async createOrder(req, res) {
        try {
            const {isActive, items, userId} = req.body
            if(!userId) return res.status(500).json("Введите userId")
            const candidate = await User.findOne({where: {id: userId}})
            if(!candidate) return res.status(400).send('User not found!')
            const newOrder = await Order.create({isActive, items: [...items], userId})
            await candidate.update({orders: [...candidate.orders, newOrder.id]})
            return res.json(newOrder)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }

    async getAllOrders(req, res) {
        try {
            const collectionOrders = await Order.findAll();
            return res.json(collectionOrders)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }

    async updateOrder(req, res) {
        try {
            const {id} = req.params;
            const {items} = req.body;
            const order = await Order.findOne({where: {id}});
            if(order) {
                const updOrder = await order.update({items: [...items]});
                return res.json(updOrder)
            } else {
                return res.json("Нет такого заказа!")
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }

    async deleteOrder(req, res) {
        try {
            const {id} = req.params;
            const response = await Order.findOne({where: {id}})
            const result = await response.update({isActive: false})
            return res.json(result)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }
}


module.exports = new OrderController()