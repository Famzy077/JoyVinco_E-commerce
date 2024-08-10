const express = require('express')
const path = require('path')
const cors = require('cors')
const ConnectDB = require('./config/connectDb')
const fileRoutes = require('./routes/fileRoutes')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use('/file', express.static('Public'))
app.use('/', express.static('Public'))

ConnectDB()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'Public')))

app.get('/home(.html)?', (req, res) => {
    res.send('Welcome to homepage')
})
app.use(('/'),fileRoutes)
app.get('/', (req, res) => {
   console.log(req.get('host'))
   res.send('File upload Page')
})

app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})


