class CartController{
    static async ShowCart(req, res){
        try {
            res.send('Masok pa eko')
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = CartController