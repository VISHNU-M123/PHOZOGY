import categoryModel from "../models/categoryModel.js";

const addCategory = async (req, res) => {
    try {
        const categoryName = req.body.categoryName.trim().toLowerCase();
        const {categoryDescription, categoryStatus} = req.body

        if(!categoryName || categoryName.trim() === ''){
            return res.status(400).json({success:false, message:'Category Name is required'})
        }

        if(!categoryDescription || categoryDescription.trim() === ''){
            return res.status(400).json({success:false, message:'Category description is required'})
        }

        if(!['Active', 'Blocked'].includes(categoryStatus)){
            return res.status(400).json({success:false, message:'Invalid status'})
        }

        const existingCategory = await categoryModel.findOne({categoryName:categoryName})

        if(existingCategory){
            return res.status(401).json({success:false, message:'Category already exists'})
        }

        const newCategory = new categoryModel({
            categoryName:categoryName,
            categoryDescription:categoryDescription,
            categoryStatus:categoryStatus
        })

        await newCategory.save()
        res.status(200).json({success:true, message:'Category added successfully'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const loadAllCategory = async (req, res) => {
    try {
        const allCategory = await categoryModel.find({}).sort({createdAt: -1})
        res.json({success:true, allCategory})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const toggleCategoryStatus = async (req, res) => {
    try {
        const {categoryId, currentStatus} = req.body

        const category = await categoryModel.findById(categoryId)
        if(!category){
            return res.status(404).json({success:false, message:'Category not found'})
        }

        category.categoryStatus = currentStatus === 'Active' ? 'Blocked' : 'Active'
        await category.save()

        res.status(200).json({success:true, message:'Category status updated successfully', updatedStatus:category.categoryStatus, category})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const updateCategory = async (req, res) => {
    try {
        const {categoryId} = req.params
        const category = await categoryModel.findById(categoryId);

        const {categoryName, categoryDescription, categoryStatus} = req.body
        if(!categoryName || categoryName.trim() === ''){
            return res.status(400).json({success:false, message:'Category Name is required'})
        }

        if(!categoryDescription || categoryDescription.trim() === ''){
            return res.status(400).json({success:false, message:'Category description is required'})
        }

        if(!['Active', 'Blocked'].includes(categoryStatus)){
            return res.status(400).json({success:false, message:'Invalid status'})
        }

        const existingCategory = await categoryModel.findOne({categoryName:categoryName})

        if(existingCategory && existingCategory._id.toString() !== categoryId){
            return res.status(400).json({success:false, message:'Category already exists'})
        }

        await categoryModel.findByIdAndUpdate(categoryId, {
            categoryName:categoryName,
            categoryDescription:categoryDescription,
            categoryStatus:categoryStatus
        })

        res.status(200).json({success:true, message:'Category updated successfully'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const loadEditCategory = async (req, res) => {
    try {
        const {categoryId} = req.params
        const category = await categoryModel.findById(categoryId)
        if(!category){
            return res.status(404).json({success:false, message:'category not found'})
        }
        return res.status(200).json({success:true, category})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const deleteCategory = async (req, res) => {
    try {
        const {categoryId} = req.params
        await categoryModel.findByIdAndDelete(categoryId)
        res.status(200).json({success:true, message:'Category deleted successfylly'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export {
    addCategory,
    loadAllCategory,
    toggleCategoryStatus,
    updateCategory,
    loadEditCategory,
    deleteCategory
}