const mongoose = require('mongoose')
const {Schema} = mongoose
const Categories = new Schema({
    viva_Plus : {
        typeof: String
    },
    price: {
        typeof: Number
    },
    description: {
        typeof: String
    }
});

module.exports = mongoose.model('Category', Categories)
