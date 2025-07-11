import express from 'express'
import { loginAdmin } from '../controllers/adminController.js'
import adminAuth from '../middlewares/adminAuth.js'
import { addCategory, deleteCategory, loadAllCategory, loadEditCategory, toggleCategoryStatus, updateCategory } from '../controllers/categoryController.js'
import { addSubCategory, deleteSubCategory, loadAllSubcategory, loadEditSubcategory, toggleSubcategoryStatus, updateSubcategory } from '../controllers/subCategoryController.js'

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
adminRouter.get('/getEditSubcategory/:subCategoryId', adminAuth, loadEditSubcategory)
adminRouter.post('/edit-subCategory/:subCategoryId', adminAuth, updateSubcategory)
adminRouter.post('/delete-category/:categoryId', adminAuth, deleteCategory)
adminRouter.post('/delete-subCategory/:subCategoryId', adminAuth, deleteSubCategory)

export default adminRouter