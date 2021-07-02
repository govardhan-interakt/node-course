
const express = require ('express')
const Task = require('./models/task')
require('./db/mongoose')
const User =require('./models/user')
const userRouter =require('./routers/user')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)




app.listen(port,()=>{
    console.log('server is on port' +port)
})
const jwt = require('jsonwebtoken')
const myfunctioin=async ()=>{
const token = jwt.sign({_id:'abcd123'},'thisisme')
console.log(token)
}
return myfunctioin()