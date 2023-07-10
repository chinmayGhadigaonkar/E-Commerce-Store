
import env from 'dotenv'
import express from "express"
import connection from './connection.js'
import routes from "./Routes/productroutes.js"
import router from "./Routes/authroutes.js"
import orouter from './Routes/ordrerRoutes.js'
import cookieParser from "cookie-parser"


import cors from "cors"

env.config()
const app = express()
const port = 8000
// cors
const corsOptions ={
    origin:['http://localhost:5173','*'], 
    credentials:true,            //access-control-allow-credentials:true
  }
app.use(cors(corsOptions))
// connection to db
connection()

app.use(express.json()) 
app.use(cookieParser())
// Routes
app.use('/products',routes)
app.use('/auth', router)
app.use('/order', orouter)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, (req, res) => {
    console.log(`app is listen in ${port}`)
})


