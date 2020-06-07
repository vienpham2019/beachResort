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
    },
    resort_rooms: {
        type: Array, 
        default: []
    },
    profile_img: {
        type: String,
        trim: true,
        default: "https://www.agriuniverse.co.zw/media/com_easysocial/photos/232/582/man-avatar-icon-flat-vector-19152370_large.jpg"
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User