const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv/config')

const app = express()

// set application is on heroku 
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))

    app.get('*' , (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client' , 'build', 'index.html'))
    })
}

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
app.use('/api/resorts' , require('./routers/resort'))

const PORT = process.env.PORT || 5000 


app.listen(PORT , () => console.log(`Server run at port ${PORT}`))