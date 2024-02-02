const express = require('express')
const CartController = require('../controllers/CartController')
const router = express.Router()

router.get('/cart', CartController.ShowCart)

module.exports = router