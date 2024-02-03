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
        } catch (err) {
            console.log(err);
        }
    }
    static async addProduct(req, res){
        try {
            const { name, price, description, imgUrl, stock, CategoryId } = req.body
            const newProduct = await Product.create({name, price, description, imgUrl, stock, CategoryId})

            res.status(201).json('New Product Created')
        } catch (err) {
            console.log(err)
        }
    }
    static async getProductbyID(req, res){
        try {
            const id = req.params.id
            const productId = await Product.findByPk(id, { attributes: { exclude: ["createdAt","updatedAt"]}})

            res.status(200).json(productId)

        } catch (err) {
            console.log(err);
        }
    }
    static async updateProduct(req, res){
        try {
            const productId = req.params.id
            if(!productId){
                return res.status(404).json('Product Id not found')
            }

            const product = await Product.findByPk(productId)

            if(!product){
                return res.status(404).json('Product not found')
            }
            await Product.update(req.body, { where: { id: productId }})

            res.status(200).json('Product updated successfully')
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = ProductController