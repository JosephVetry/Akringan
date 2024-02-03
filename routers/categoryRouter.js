const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const router = express.Router()

router.get('/category', CategoryController.showCategory)

module.exports = router