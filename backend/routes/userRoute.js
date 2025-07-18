import express from 'express'
import { loadHome, loginUser, registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/', loadHome)

export default userRouter