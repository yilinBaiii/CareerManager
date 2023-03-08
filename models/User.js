import mongoose from 'mongoose'

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

export default mongoose.model('User', UserSchema)