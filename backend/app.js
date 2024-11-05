const express = require('express')
require('dotenv').config()
const connectDB = require('./db/db')
const morgan = require("morgan")
const cors = require("cors")
const routeAuth = require("./routes/auth.route")
const {empruntRoute} = require('./routes/empruntRoute')
const {MAterielRouter} = require('./routes/materiel.route')
const cookieParser = require('cookie-parser')

//

//console.log(crypto.randomBytes(64).toString('hex'));
const app = express()
const port = process.env.PORT||5000
//middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api",routeAuth)
app.use("/api",MAterielRouter)
app.use("/api",empruntRoute)


app.listen(port,()=>{
    connectDB()
    console.log(`server is runing on http://localhost:${port}`);
    
})


