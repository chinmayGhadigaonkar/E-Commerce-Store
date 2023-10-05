
import env from 'dotenv'
import express from "express"
import connection from './connection.js'
import routes from "./Routes/productroutes.js"
import router from "./Routes/authroutes.js"
import orouter from './Routes/ordrerRoutes.js'
import cartrouter from './Routes/cartRoutes.js'
import cookieParser from "cookie-parser"
import cors from "cors"
import Product from './models/product.js'
 
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
app.use('/cart', cartrouter )




// Search Engine
app.get('/search',async (req, res) => {
    const query = req.query.query;

    if(query==""){
       res.status(400).json({success:false,message : "Please Enter a product name before Search"});
       return 
    }else{
      try {
        // Perform case-insensitive search based on product name
        const products = await Product.find({ title: { $regex: query, $options: 'i' } });
        if(!products){
          res.status(400).json({success:false});
        }    
        res.status(200).json({success:true, products});
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      } 
    }
     
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, (req, res) => {
    console.log(`app is listen in ${port}`)
})


