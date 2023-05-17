const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product.controller');
const userController = require('../Controllers/User.controller');
const orderController = require('../Controllers/Order.controller');
const multer = require('multer');
const storage = require('../multerStorage');

const upload = multer({ storage: storage });

router.get('/products', productController.getProducts);

router.post('/products', upload.single('file'), productController.createProduct);  

router.get('/products/:id', productController.findProduct);

router.patch('/products/:id', upload.single('file'), productController.updateProduct);

router.delete('/products/:id', productController.deleteProduct);

router.get('/users', userController.getUsers);

router.post('/users', upload.single('file'), userController.createUser);

router.get('/users/:id', userController.findUser);

router.patch('/users/:id', upload.single('file'), userController.updateUser);

router.delete('/users/:id', userController.deleteUser);

router.get('/orders', orderController.getOrders);

router.post('/orders', upload.single('file'), orderController.createOrder);

router.get('/orders/:id', orderController.findOrder);

router.patch('/orders/:id', upload.single('file'), orderController.updateOrder);

router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;