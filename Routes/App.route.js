const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product.controller');
const userController = require('../Controllers/User.controller');
const orderController = require('../Controllers/Order.controller');
const multer = require('multer');
const storage = require('../multerStorage');

const upload = multer({ storage: storage });

router.get('/products', productController.getAllProducts);

router.post('/products', upload.single('file'), productController.postProduct);  

router.get('/products/:id', productController.getProductById);

router.patch('/products/:id', upload.single('file'), productController.patchProduct);

router.delete('/products/:id', productController.deleteProduct);

router.get('/users', userController.getAllUsers);

router.post('/users', upload.single('file'), userController.postUser);

router.get('/users/:id', userController.getUserById);

router.patch('/users/:id', upload.single('file'), userController.patchUser);

router.delete('/users/:id', userController.deleteUser);

router.get('/orders', orderController.getAllOrder);

router.post('/orders', upload.single('file'), orderController.postOrder);

router.get('/orders/:id', orderController.getOrderById);

router.patch('/orders/:id', upload.single('file'), orderController.patchOrder);

router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;