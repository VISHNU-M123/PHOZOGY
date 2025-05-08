import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        default:'0000000000'
    },
    password:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model('User', userSchema)

export default userModel