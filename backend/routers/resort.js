const router = require('express').Router()
const Resort = require('../models/resorts.model')

router.get('/' , (req,res) => {
    Resort.find()
    .then(resorts => res.json(resorts))
    .catch(error => res.status(400).json({msg: error}))
})

router.post('/', (req,res) => {
    let {title, price, main_image_url, resroom_image_url , maximum_adults , description , space , connections , restroom , service } = req.body 
    let newResort = new Resort({title, price, main_image_url, resroom_image_url,  maximum_adults , description , space , connections , restroom , service})
    newResort.save()
    .then(resort => res.json(resort))
    .catch(error => res.status(400).json({msg: error}))
})

module.exports = router