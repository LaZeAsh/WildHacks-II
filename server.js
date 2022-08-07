if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('views', __dirname + '/views')
app.use(express.static('assets'))
app.use(bodyParser.urlencoded({limit:'500mb', extended:false}))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', (error)=>{console.error(error)})
db.once('open', ()=>{console.log('Connected to Database')})

const indexRouter = require('./routes/index')

app.use('/',indexRouter)

try{
    app.listen(process.env.PORT || 3000)
}catch(e){}

