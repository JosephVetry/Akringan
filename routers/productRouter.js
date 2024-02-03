const express = require('express')
const ProductController = require('../controllers/productController')
const { authentication } = require('../middlewares/authen.js')

const router = express.Router()

router.use(authentication)
router.get('/products', ProductController.showProduct)
router.post('/product', ProductController.addProduct)
router.get('/product/:id', ProductController.getProductbyID)
router.put('/product/:id', ProductController.updateProduct)

module.exports = router