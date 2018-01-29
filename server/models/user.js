const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Usermodel schema
const userSchema = new Schema('User', {
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}