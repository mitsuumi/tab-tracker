console.log('good')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// morgan是express預設的日誌中介軟體，也可以脫離express，作為node.js的日誌元件單獨使用
app.use(morgan('combine'))
app.use(bodyParser.json())
//we need cores if you want a server to be hosted on a different domain and you any client around the world to hit your server and it's kind of a security risk to have it enabled 
app.use(cors())

app.get('/status',(req,res)=>{
    res.send({
        message: 'hello world'
    })
})

app.listen(process.env.PORT || 8081)