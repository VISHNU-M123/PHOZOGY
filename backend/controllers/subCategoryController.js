import categoryModel from "../models/categoryModel.js"
import subCategoryModel from "../models/subCategoryModel.js"

const addSubCategory = async (req, res) => {
    try {
        const subCategoryName = req.body.subCategoryName.trim().toLowerCase()
        const {subCategoryDescription, subCategoryStatus, mainCategoryId} = req.body

        if(!subCategoryName || subCategoryName.trim() === ''){
            return res.status(400).json({success:false, message:'Subcategory name is required'})
        }

        if(!subCategoryDescription || subCategoryDescription.trim() === ''){
            return res.status(400).json({success:false, message:'Subcategory description is required'})
        }

        if(!['Active', 'Blocked'].includes(subCategoryStatus)){
            return res.status(400).json({success:false, message:'Invalid status'})
        }

        if(!mainCategoryId){
            return res.status(401).json({success:false, message:'Please select a main category'})
        }

        const mainCategory = await categoryModel.findById(mainCategoryId)
        if(!mainCategory){
            return res.status(401).json({success:false, message:'Main category not found'})
        }

        const existingSubCategory = await subCategoryModel.findOne({subCategoryName:subCategoryName})
        if(existingSubCategory){
            return res.status(401).json({success:false, message:'Subcategory already exists'})
        }

        const newSubCategory = new subCategoryModel({
            subCategoryName:subCategoryName,
            subCategoryDescription:subCategoryDescription,
            subCategoryStatus:subCategoryStatus,
            categoryId:mainCategoryId
        })

        await newSubCategory.save()
        res.status(200).json({success:true, message:'Subcategory added successfully'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const loadAllSubcategory = async (req, res) => {
    try {
        const {categoryId} = req.params
        const subCategories = await subCategoryModel.find({categoryId})

        if(subCategories.length === 0){
            return res.status(404).json({success:false, message:'No Subcategories found for this category'})
        }

        res.status(200).json({success:true, subCategories})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const toggleSubcategoryStatus = async (req, res) => {
    try {
        const {subCategoryId, currentStatus} = req.body

        const subCategory = await subCategoryModel.findById(subCategoryId)
        if(!subCategory){
            return res.status(404).json({success:false, message:'Subcategory not found'})
        }

        subCategory.subCategoryStatus = currentStatus === 'Active' ? 'Blocked' : 'Active'
        await subCategory.save()

        res.status(200).json({success:true, message:'Subcategory status updated successfully', updatedStatus:subCategory.subCategoryStatus, subCategory})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const loadEditSubcategory = async (req, res) => {
    try {
        const {subCategoryId} = req.params
        const subCategory = await subCategoryModel.findById(subCategoryId).populate('categoryId')
        if(!subCategory){
            return res.status(404).json({success:false, message:'Subcategory not found'})
        }
        return res.status(200).json({success:true, subCategory})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const updateSubcategory = async (req, res) => {
    try {
        const {subCategoryId} = req.params
        const subCategory = await subCategoryModel.findById(subCategoryId)
        if(!subCategory){
            return res.status(404).json({success:false, message:'Subcategory not found'})
        }
        
        const subCategoryName = req.body.subCategoryName.trim()
        const {subCategoryDescription, subCategoryStatus, mainCategoryId} = req.body

        if(!subCategoryName || subCategoryName.trim() === ''){
            return res.status(400).json({success:false, message:'Subcategory name is required'})
        }

        if(!subCategoryDescription || subCategoryDescription.trim() === ''){
            return res.status(400).json({success:false, message:'Subcategory description is required'})
        }

        if(!['Active', 'Blocked'].includes(subCategoryStatus)){
            return res.status(400).json({success:false, message:'Invalid status'})
        }

        const mainCategory = await categoryModel.findById(mainCategoryId)
        if(!mainCategory){
            return res.status(404).json({success:false, message:'Main category not found'})
        }

        const existingSubCategory = await subCategoryModel.findOne({subCategoryName:subCategoryName, categoryId:mainCategoryId})
        if(existingSubCategory && existingSubCategory._id.toString() !== subCategoryId){
            return res.status(400).json({success:false, message:'Subcategory already exists'})
        }

        await subCategoryModel.findByIdAndUpdate(subCategoryId, {
            subCategoryName:subCategoryName,
            subCategoryDescription:subCategoryDescription,
            subCategoryStatus:subCategoryStatus,
            categoryId:mainCategoryId
        })

        res.status(200).json({success:true, message:'Subcategory updated successfully'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

const deleteSubCategory = async (req, res) => {
    try {
        const {subCategoryId} = req.params
        await subCategoryModel.findByIdAndDelete(subCategoryId)
        res.status(200).json({success:true, message:'Subcategory deleted successfylly'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export {
    addSubCategory,
    loadAllSubcategory,
    toggleSubcategoryStatus,
    loadEditSubcategory,
    updateSubcategory,
    deleteSubCategory
}