const express = require('express')
const router = express.Router()
const CategoriesController = require('../controller/productController')

router.route('/')
            .get(CategoriesController.getProduct)

module.exports = router