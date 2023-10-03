const Router = require('express')
const router = new Router()
const menuItemController = require("../controller/menuItemController");
const orderController = require("../controller/orderController");
const userController = require("../controller/userController");


router.get('/waiters', userController.getAllUser)
router.post('/waiters', userController.createUser)
router.get('/menu', menuItemController.getAllMenuItem)
router.get('/orders', orderController.getAllOrders)
router.post('/orders', orderController.createOrder)
router.put('/orders/:id', orderController.updateOrder)
router.delete('/orders/:id', orderController.deleteOrder)

module.exports = router