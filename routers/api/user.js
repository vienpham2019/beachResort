const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv/config')

let User = require('../../models/user.model')

// Resigter 
router.post('/register' , (req,res) => {
    let error = []
    let {user_name, email , password , confirm_password} = req.body

    if(!user_name) error.push({user_name_error: "User name can't be blank."})
    if(!email) error.push({email_error: "Email can't be blank."})
    if(!password) error.push({password_error: "Password name can't be blank."})
    if(password && password.length < 5) error.push({password_error: "Passwords must have at least 5 character."})
    if(!confirm_password) error.push({password_error: "Confirm Password name can't be blank."})
    if(confirm_password && confirm_password != password) error.push({password_error: "Confirm Password and Password does not match."})

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        error.push({email_error: 'Invalid email.'})
    }

    User.findOne({email})
    .then(user => {
        if(user) error.push({email_error: "This email address is already taken."})

        if(error.length > 0){
            res.json({error})
        }else{
            let newUser = new User({user_name , email , password})
            bcrypt.genSalt(10,(err, salt) => 
                bcrypt.hash(newUser.password, salt , (err , hash) => {
                    if(err) throw err
                    newUser.password = hash
                    newUser.save()
                    .then(user => { 
                        res.json({msg: "Register successful."}) 
                    })
                })
            )
            
        }
    })
})

// login 

router.post('/login', (req,res) => {
    let {email, password} = req.body

    User.findOne({email})
    .then(user => {
        if(!user){
            res.json({error: "Invalid email or password."})
        }else{
            bcrypt.compare(password, user.password , (error , isMatch) => {
                if(error){
                    res.json({error})
                }
                if(isMatch){
                    let token = jwt.sign({id: user.id} , process.env.jwt_key , {algorithm: "HS256"})

                    let {user_name, resort_rooms , profile_img} = user 

                    res.json({user: {user_name, resort_rooms , profile_img , token}}) 
                }else{
                    res.json({error: "Invalid email or password."})
                }
            })
        }
    })
})


module.exports = router