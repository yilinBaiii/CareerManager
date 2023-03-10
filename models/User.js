import bcrypt from 'bcryptjs';
import mongoose from 'mongoose'
import validator from 'validator'

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

UserSchema.methods.createJWT() = async function () {
    
}


export default mongoose.model('User', UserSchema)