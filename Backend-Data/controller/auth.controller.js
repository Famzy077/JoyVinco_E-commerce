// import User from "../model/user.module"
import Redis from 'ioredis';
import User from '../model/user.module.js'
import jwt from 'jsonwebtoken'

const generateTokens = (userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOEKN_SECRECT, {
        expiresIn: "15m"
    })
    const refreshToken = jwt.sign({userId}, process.env.ACCESS_TOEKN_SECRECT, {
        expiresIn: "7d"
    })
    return {accessToken, refreshToken}
};

const storeRefreshToken = async(userId, refreshToken) => {
    await Redis.set(`refresh_token:${userId}`, refreshToken,  'EX', 7 * 24 * 60 * 60)  //7days


}
export const signup = async (req, res) => {
    const {email, password, name} = req.body
    try {
        
    const userExist = await User.findOne({email});
    if(userExist) {
        return res.status(400).json({message: 'Email already exist.'})
    };

    const user = await User.create({name, email, password})

    const {accessToken, refreshToken} = generateTokens(user._id)
    // authentication
    await storeRefreshToken(user._id, refreshToken)
    setCookies

    res.status(201).json({user, message: 'User created successfully'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const login = async(req, res) => {
    res.send('Login up route called')
}

export const logout = async(req, res) => {
    res.send('Log Out up route called')
}