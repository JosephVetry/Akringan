const express = require('express');
const router = express.Router();
const CartRouter = require('./cartRouter')
const ProductRouter = require('./productRouter')

router.use('/', CartRouter);
router.use('/', ProductRouter)

module.exports = router