import express from "express"
import routes from "./Routes/productroutes.js"
import connection from './connection.js'
import router from "./Routes/authroutes.js"

const app = express()
const port = 8000

// connection to db
connection()

app.use(express.json()) 
// Routes
app.use('/products',routes)
app.use('/auth', router)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, (req, res) => {
    console.log(`app is listen in ${port}`)
})


