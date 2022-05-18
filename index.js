const express=require('express')
const app=express()
const db=require('./config/db.config')
const userRouter=require('./routers/userRouter')
const PORT=process.env.PORT || 5000;
const { json } = require('express')

db.authenticate()
.then(res=> console.log('Connection has been established successfully.'))
.catch(error=>console.error('Unable to connect to the database:', error))

app.use(json())

app.use('/api/user',userRouter)


app.listen(PORT, () => {
    console.log(`Server has started! on PORT ${PORT}`)
  })