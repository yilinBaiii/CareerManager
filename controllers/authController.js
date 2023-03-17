import User from '../models/User.js'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'

class APIError extends Error {
    constructor(message, statusCode = StatusCodes.BAD_REQUEST) {
        super(message);
        this.statusCode = statusCode;
    }
}

APIError.prototype.toString = function () {
    return `Error Reason: ${getReasonPhrase(this.statusCode)}` + '\n' + this.stack;
};

const register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password)
        throw new APIError('Please provide all values', StatusCodes.BAD_REQUEST)
    const userAlreadyExist = await User.findOne({ email })
    if (userAlreadyExist)
        throw new APIError('This email has been registered', StatusCodes.BAD_REQUEST)
    const user = await User.create({ name, email, password })

    const token = await user.createJWT()
    res.status(StatusCodes.CREATED).json({
        user:{
            name: user.name, 
            lastName: user.lastName, 
            location: user.location, 
            email:user.email,
        }, 
        location: user.location,
        token,
    })
}

const login = async(req, res) => {
    const {email, password} = req.body 
    if (!email || !password) {
        throw new APIError('Please provide all values', StatusCodes.BAD_REQUEST)
    }
    const user = await User.findOne({email}).select('+password')
    if (!user) {
        throw new APIError('Invalid Credential', StatusCodes.UNAUTHORIZED)
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect){
        throw new APIError('Invalid Credential', StatusCodes.UNAUTHORIZED)
    }
    const token = await user.createJWT()
    user.password = undefined
    res.status(StatusCodes.CREATED).json({
        user, token, location: user.location
    })
}

const updateUser = async(req, res) => {
    console.log('updateUser', req.user.userId)
    res.send('updateUser user')
}



export { register, login, updateUser, APIError}