const express = require('express')
const ProductController = require('../controllers/productController')
const router = express.Router()

router.get('/product', ProductController.showProduct)
router.post('/product', ProductController.addProduct)

module.exports = router