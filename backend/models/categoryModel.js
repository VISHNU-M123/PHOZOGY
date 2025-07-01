import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    categoryDescription:{
        type:String,
    },
    categoryStatus:{
        type:String,
        enum:['Active', 'Blocked'],
        default:'Active'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const categoryModel = mongoose.model('Category', categorySchema)

export default categoryModel