import jwt from "jsonwebtoken"


async function authMiddleware(req,res,next){
    const {token}=req.headers
    if(!token)
    res.json({success:false,message:"you are not allowed"})
    try {
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        req.body.userId=decoded.id
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error",error:message.error})
    }
}

export {authMiddleware}