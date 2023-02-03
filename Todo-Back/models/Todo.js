const {default: mongoose} = require('mongoose')
const { Schema } = mongoose

const todoSchema = Schema({
    title: String,
    isCompleted: {
        type: Boolean, default: false
    },
    date: {
        type:Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean, default: false
    },
})

const todoModel = mongoose.model('todos', todoSchema)

module.exports = {
    todoModel
}