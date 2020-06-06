const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv/config')

const app = express()

app.use(cors())
app.use(express.json())

// body midware 
app.use(express.urlencoded({extended: false}))

// data base 
const uri = process.env.MONGOOSE_URI
mongoose.connect(uri,  {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true })

const connection = mongoose.connection 
connection.once('open' , () => console.log('Connect to database...'))

// routers 
app.use('/resorts' , require('./routers/resort'))

const PORT = process.env.PORT || 5000 

// set application is on heroku 
if(process.env.NODE_ENV === "production"){
    app.use(express.static('frontend/build'))

    app.get('*' , (req,res) => {
        res.sendFile(path.join(__dirname, 'frontend' , 'build' , 'index.html'))
    })
}

app.listen(PORT , () => console.log(`Server run at port ${PORT}`))