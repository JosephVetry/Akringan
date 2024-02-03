const express = require('express')
const router = express.Router()
const TransactionController = require('../controllers/transactionController')
const { authentication } = require('../middlewares/authen.js')

router.use( authentication)
router.post('/checkout', TransactionController.checkout)


module.exports = router