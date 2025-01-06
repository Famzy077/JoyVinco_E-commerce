const Product = require('../Schema/productSchema')
const Category = require('../Schema/categories')

let getProduct = async(req, res) => {
    try {
        let productResponse = await Product.find()
        res.status(200).json(productResponse)
        // console.log(`${productResponse} Succesfully Fetched`)
    } catch (error) {
        res.status(404).json({error: 'Products can\'t be find'})
        console.log(error)
    }
}

// let singleProduct = async(req, res) => {
//     let SingleproductResponse = await Product.findById(req.params.id)
//     if(Product != null){
//         res.status()
//     }
// }

let categories = async(req, res) => {
    try {
        let productCategories = await Category.find()
    res.status(200).json(productCategories)
        console.log('Product Successfully Accessed')
        
    } catch (error) {
        res.status(404).json({error: 'product could not be found'})
        console.log(error)
    }
}


module.exports = {getProduct, categories}