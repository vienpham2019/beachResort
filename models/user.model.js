const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const UserSchema = new Schema({
    user_name: {
        type: String, 
        trim: true, 
        require: true 
    },
    email: {
        type: String, 
        trim: true, 
        required: true
    },
    password: {
        type: String, 
        trim: true,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User