import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import { ConnectDB } from './config/connectDb.js';
import path from 'path'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5001

ConnectDB()
app.use(express.json())
app.set('view engine', 'ejs');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`App running on Port: ${PORT}`)

})