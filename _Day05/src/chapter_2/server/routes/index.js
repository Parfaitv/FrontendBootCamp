const Router = require('express')
const router = new Router()
const menuItemController = require("../controller/menuItemController");
const orderController = require("../controller/orderController");
const userController = require("../controller/userController");


router.post('/signup', userController.createUser);
router.post('/signin', userController.checkUser);
router.get('/waiters', userController.getAllUser);
router.get('/menu', menuItemController.getAllMenuItem);
router.post('/menu', menuItemController.createMenuItem);
router.get('/orders', orderController.getAllOrders);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router