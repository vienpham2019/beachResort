const router = require('express').Router()
const Resort = require('../../models/resorts.model')

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

// add comment to resort room 

router.post('/update_comment' , (req,res) => {
    let {room_id , new_comment} = req.body 
    Resort.findOne({_id: room_id})
    .then(room => {
        if(room){
            room.comments.unshift(new_comment)
            room.save()
            .then(room => res.json({msg: "Update success"}))
            .catch(error => console.log(error))
        }
    })
})

// delete comment to resort room 
router.post('/delete_comment', (req,res) => {
    let {comment, room_id} = req.body
    Resort.findOne({_id: room_id})
    .then(room => {
        if(room){
            room.comments = room.comments.filter(c => c.id !== comment.id)
            room.save()
            .then(room => {
                res.json({msg: "Delete success"})
            })
            .catch(error => console.log(error))
        }
    })
})

module.exports = router