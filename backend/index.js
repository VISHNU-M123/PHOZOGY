import express from 'express'
import userRouter from './routes/userRoute.js'
import connectDB from './config/mongodb.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express()

const PORT = 3000
app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/user', userRouter)

app.listen(PORT,() => {
    console.log('server is running',PORT)
})