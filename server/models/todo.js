const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Todo model schema
const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = {Todo}