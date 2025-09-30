const express=require("express");
const app = express();
const connectDB = require('./config/database')
const Contact = require('./models/crudExpress.model')
const userRouter=require('./Routes/user.router')

//Connection To MongoDB
connectDB()

//Middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

//Routing
app.use(userRouter)

const PORT=process.env.PORT|3000

app.listen(PORT,(req,es)=>{
    console.log("server Connected Sucessfully on port number :"+PORT); 
})