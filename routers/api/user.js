const router = require('express').Router()
const bcrypt = require('bcryptjs')
let User = require('../../models/user.model')

// Resigter 
router.post('/register' , (req,res) => {
    let error = []
    let {user_name, email , password , confirm_password} = req.body

    if(!user_name) error.push({user_name_errror: "User name can't be blank."})
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
    })
    .then(() => {
        if(error.length > 0){
            res.status(400).json({msg: error})
        }else{
            let newUser = new User({user_name , email , password})
            bcrypt.genSalt(10,(err, salt) => 
                bcrypt.hash(newUser.password, salt , (err , hash) => {
                    if(err) throw err
                    newUser.password = hash
                    newUser.save()
                    .then(user => res.json(user))
                })
            )
            
        }
    })
})


module.exports = router