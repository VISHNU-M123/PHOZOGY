import express from 'express'
import { loginAdmin } from '../controllers/adminController.js'
import adminAuth from '../middlewares/adminAuth.js'
import { addCategory, loadAllCategory } from '../controllers/categoryController.js'
import { addSubCategory } from '../controllers/subCategoryController.js'

const adminRouter = express.Router()

adminRouter.post('/login', loginAdmin)
adminRouter.post('/add-category', adminAuth, addCategory)
adminRouter.post('/add-subCategory', adminAuth, addSubCategory)
adminRouter.get('/allCategory', adminAuth, loadAllCategory)

export default adminRouter