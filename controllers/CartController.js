const { Cart } = require('../models');

class CartController {
    static async ShowCart(req, res) {
        try {
            res.send('Masuk Cart')
        } catch (err) {
            console.log(err)
        }
    }
    static async addtoCart(req, res) {
        try {
            const { productId } = req.params
            const CustomerId = req.user.id
            const { quantity } = req.body

            const newCart = await Cart.create({ ProductId: productId, CustomerId, status: 'active', quantity })

            res.status(201).json('Added to Cart')
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = CartController