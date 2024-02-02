const { Product, Category } = require('../models');

function formatRupiah(amount) {
    try {
        const amountStr = String(amount).split("").reverse().join("");
        const blocks = [];
        for (let i = 0; i < amountStr.length; i += 3) {
            blocks.push(amountStr.substr(i, 3));
        }
        const result = blocks.join(".").split("").reverse().join("");
        return "Rp." + result;
    } catch (error) {
        return "Format input tidak valid";
    }
}

class ProductController{
    static async showProduct(req, res) {
        try {
            const product = await Product.findAll({ include: Category })

            const response = product.map(el => ({
                name: el.name,
                price: formatRupiah(el.price),
                description: el.description,
                imgUrl: el.imgUrl,
                stock: el.stock,
                category: el.Category.name
            }))


            res.status(200).json(response)
        } catch (error) {
            console.log(error);
        }
    }
    static async addProduct(req, res){
        try {
            const { name, price, description, imgUrl, stock, CategoryId } = req.body
            const newProduct = await Product.create({name, price, description, imgUrl, stock, CategoryId})

            res.status(201).json('New Product Created')
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = ProductController