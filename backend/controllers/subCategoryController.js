import categoryModel from "../models/categoryModel.js"
import subCategoryModel from "../models/subCategoryModel.js"

const addSubCategory = async (req, res) => {
    try {
        const subCategoryName = req.body.subCategoryName.trim().toLowerCase()
        const {subCategoryDescription, mainCategoryId} = req.body

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
            categoryId:mainCategoryId
        })

        await newSubCategory.save()
        res.status(200).json({success:true, message:'Subcategory added successfully'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export {
    addSubCategory
}