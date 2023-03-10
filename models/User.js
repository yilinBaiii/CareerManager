import bcrypt from 'bcryptjs';
import mongoose from 'mongoose'
import validator from 'validator'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required:[true, 'Please provide name'], 
        minlength: 3, 
        maxlength: 20, 
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        unique: true,
        minlength: 6,
        select: false,
    },
   lastName: {
        type: String, 
        required:[true, 'Please provide name'], 
        maxlength: 20, 
        trim: true,
        default: "last name",
    },
    location: {
        type: String, 
        required: true,
        maxlength: 20, 
        trim: true,
        default: "my city",
    },
})

UserSchema.pre('save', async function (next) {
    console.log(this.password);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.createJWT = async function () {
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFEIME,})
}


export default mongoose.model('User', UserSchema)