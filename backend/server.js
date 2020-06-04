const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

app.use(cors())
app.use(express.json())

// body midware 
app.use(express.urlencoded({extended: false}))

// data base 
const url = process.env.MONGOOSE_URL
mongoose.connect(url,  {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true })

const connection = mongoose.connection 
connection.once('open' , () => console.log('Connect to database...'))

// routers 
app.use('/resorts' , require('./routers/resort'))

const PORT = process.env.PORT || 5000 

app.listen(PORT , () => console.log(`Server run at port ${PORT}`))