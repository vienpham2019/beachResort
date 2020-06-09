const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ResortSchema = new Schema({
    title: {
        type: String, 
        trim: true, 
        required: true 
    },
    price: {
        type: String, 
        trim: true,
        required: true
    },
    main_image_url: {
        type: String, 
        trim: true,
        required: true
    }, 
    resroom_image_url: {
        type: String, 
        trim: true,
        required: true
    },
    maximum_adults: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String, 
        trim: true, 
        required: true
    },
    space: {
        type: Array, 
        default: [],
        required: true
    },
    connections: {
        type: Array, 
        default: [], 
        required: true 
    },
    restroom: {
        type: Array, 
        default: [], 
        required: true 
    },
    service: {
        type: Array, 
        default: [],
        required: true
    },
    comments: {
        type: Array, 
        default: [],
        required: true 
    }
})

const Resort = mongoose.model('Resort', ResortSchema)

module.exports = Resort