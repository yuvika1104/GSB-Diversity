import jwt from "jsonwebtoken"

export const generateAccessToken =(payload)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}
export const generateRefreshToken =(payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}
export const generateResetToken =(payload)=>{
    return jwt.sign(payload,process.env.RESET_TOKEN_SECRET,{
        expiresIn: '1h'
    })
}
export const verifyAccessToken=(token)=>{
    return jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
}
export const verifyRefreshToken=(token)=>{
    return jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
}
export const verifyResetToken=(token)=>{
    return jwt.verify(token,process.env.RESET_TOKEN_SECRET);
}

export default{
    generateAccessToken,
    generateRefreshToken,verifyAccessToken,
    verifyRefreshToken,generateResetToken,verifyResetToken
}