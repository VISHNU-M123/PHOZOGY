import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import categoryModel from "../models/categoryModel.js";
import subCategoryModel from "../models/subCategoryModel.js";

const registerUser = async (req, res) => {
    try {
        const {name, email, mobile, password} = req.body
        if(!name || !email || !mobile || !password){
            return res.json({success:false, message:'missing details'})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false, message:'Please provide a valid email'})
        }
        if(password.length < 6){
            return res.json({success:false, message:'Please provide strong password'})
        }
        if(mobile.length !== 10){
            return res.json({success:false, message:'Please provide a valid number'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            mobile,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({success:true, token})
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.json({success:false, message:'Please provide email and password'})
        }

        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:'User not exists'})
        }

        // code copied 
        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
        }else{
            res.json({success:false, message:'Invalid credentials'})
        }
    } catch (error) {
        console.log(error)
    }
}

const loadHome = async (req, res) => {
    try {
        const category = await categoryModel.find({categoryStatus: 'Active'}).sort({createdAt: -1})
        const subCategories = await Promise.all(
            category.map(async (cat) => {
                const subcategory = await subCategoryModel.find({
                    categoryId:cat._id,
                    subCategoryStatus:'Active'
                }).sort({createdAt: -1})

                return {
                    _id:cat._id,
                    categoryName:cat.categoryName,
                    subcategory
                }
            })
        )

        res.status(200).json({success:true, categories: subCategories})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export {
    loginUser,
    registerUser,
    loadHome
}