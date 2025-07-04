import categoryModel from "../models/categoryModel.js";

const addCategory = async (req, res) => {
    try {
        const categoryName = req.body.categoryName.trim().toLowerCase();
        const {categoryDescription, categoryStatus} = req.body

        if(!categoryName || categoryName.trim() === '' || !/^[a-zA-Z0-9\s]+$/.test(categoryName)){
            return res.status(400).json({success:false, message:'Invalid or Category Name is required'})
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
        const allCategory = await categoryModel.find({})
        res.json({success:true, allCategory})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export {
    addCategory,
    loadAllCategory
}