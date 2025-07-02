import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        const {atoken} = req.headers

        if(!atoken){
            return res.status(401).json({success:false, message:'Not Authorized. Login again'})
        }

        const decoded = jwt.verify(atoken, process.env.JWT_SECRET)

        if(decoded.email !== process.env.ADMIN_EMAIL){
            return res.status(403).json({success:false, message:'Invalid Admin'})
        }

        next()
    } catch (error) {
        console.log(error)
    }
}

export default adminAuth