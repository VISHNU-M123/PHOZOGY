import express from 'express'
import { loginAdmin } from '../controllers/adminController.js'
import adminAuth from '../middlewares/adminAuth.js'
import { addCategory, loadAllCategory, loadEditCategory, toggleCategoryStatus, updateCategory } from '../controllers/categoryController.js'
import { addSubCategory, loadAllSubcategory, toggleSubcategoryStatus } from '../controllers/subCategoryController.js'

const adminRouter = express.Router()

adminRouter.post('/login', loginAdmin)
adminRouter.post('/add-category', adminAuth, addCategory)
adminRouter.post('/add-subCategory', adminAuth, addSubCategory)
adminRouter.get('/allCategory', adminAuth, loadAllCategory)
adminRouter.post('/toggleCategoryStatus', adminAuth, toggleCategoryStatus)
adminRouter.get('/all-subCategories/:categoryId', adminAuth, loadAllSubcategory)
adminRouter.post('/toggleSubcategoryStatus', adminAuth, toggleSubcategoryStatus)
adminRouter.post('/edit-category/:categoryId', adminAuth, updateCategory)
adminRouter.get('/getEditCategory/:categoryId', adminAuth, loadEditCategory)

export default adminRouter