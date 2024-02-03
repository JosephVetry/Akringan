const express = require('express')
const CartController = require('../controllers/CartController')
const router = express.Router()
const { authentication } = require('../middlewares/authen.js')

router.use(authentication)
router.get('/cart', CartController.ShowCart)
router.post('/cart/:productId', CartController.addtoCart)

module.exports = router