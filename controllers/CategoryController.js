const { Category } = require('../models')

class CategoryController {
    static async showCategory(req, res) {
        try {
            const categories = await Category.findAll({attributes: { exclude: ['createdAt','updatedAt']}})

            res.status(200).json(categories)
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = CategoryController