const mongoose = require('mongoose')
const ConnectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/digital')
        console.log('Connected Successfully')
    } catch (error) {
        console.log(error)
        exit(1)
    }
}

module.exports = ConnectDB