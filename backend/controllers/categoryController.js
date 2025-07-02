import categoryModel from "../models/categoryModel.js";

const addCategory = async (req, res) => {
    try {
        const categoryName = req.body.categoryName.trim().toLowerCase();
        const {categoryDescription} = req.body

        const existingCategory = await categoryModel.findOne({categoryName:categoryName})

        if(existingCategory){
            return res.status(401).json({success:false, message:'Category already exists'})
        }

        const newCategory = new categoryModel({
            categoryName:categoryName,
            categoryDescription:categoryDescription
        })

        await newCategory.save()
        res.status(200).json({success:true, message:'Category added successfully'})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export {
    addCategory
}