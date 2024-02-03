const { Cart, Product, Transaction } = require('../models');

class transactionController{
    static async checkout(req, res){
        try {
            const userId = req.user.id
            const cart = await Cart.findAll({
                where: { CustomerId: userId, status: 'active' },
                include: [
                    {
                        model: Product
                    }
                ] 
            })
            const response = cart.map((el) => ({
                id: el.id,
                product: el.Product.name,
                price: el.Product.price,
                quantity: el.quantity,
                subtotal: el.Product.price * el.quantity
            }))

            const totalPayment =  response.map((el) => ({
                subtotal: el.subtotal 
            }))
    
            const total = response.reduce((prevValue, currentValue )=> prevValue.subtotal + currentValue.subtotal)
            // let total = 0
            // for (let i = 0; i < totalPayment.length; i++) {
            //     total += totalPayment[i].subtotal
            // }
            const createOrder = await Transaction.create({
                CustomerId: userId,
                statusPayment: 'Checked Out',
                totalPayment: total
            })
            res.status(201).json({status : 201,
            message: 'Checked Out successfully',
            createOrder
            })

        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = transactionController;