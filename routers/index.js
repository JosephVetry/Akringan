const express = require('express');
const router = express.Router();
const CartRouter = require('./cartRouter')
const ProductRouter = require('./productRouter')
const UserRouter = require('./userRouter')
const CategoryRouter = require('./categoryRouter')
const TransactionRouter = require('./transactionRouter')

router.use('/', UserRouter);
router.use('/', ProductRouter)
router.use('/', CategoryRouter)
router.use('/', CartRouter);
router.use('/', TransactionRouter)

module.exports = router