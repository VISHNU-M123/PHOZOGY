import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    subCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subCategory',
        required:true
    }
})

const workModel = mongoose.model('Work', workSchema)

export default workModel