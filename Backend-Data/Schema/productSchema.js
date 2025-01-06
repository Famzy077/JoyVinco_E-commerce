const mongoose = require('mongoose')
const {Schema} = mongoose
const ProductSchema = new Schema({
    Viva_Plus: {
        typeof: String
    },
    Price : {
        typeof: Number
    },
    Categories: {
        typeof: String
    }
})

module.exports = mongoose.model('Product', ProductSchema)