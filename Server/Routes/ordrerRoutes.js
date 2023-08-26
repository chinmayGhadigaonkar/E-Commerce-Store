import { Router } from "express";
import Order from '../models/order.js'
import { authMiddleware, authorizeRoles } from "../Midware/authMiddleware.js";


const router = Router()

//  get order detail 

router.get("/getOrder",authMiddleware,authorizeRoles(true),async (req,res)=>{
    try{
        const order = await Order.find()
      res.status(200).json({order})
    }
    catch(e){
        res.status(400).json("Order Not Found")
    }
})


//  place  order 
 
router.post("/placeOrder", authMiddleware , async(req ,res )=>{
    try{
        const order = await Order.create(req.body)
      res.status(200).json({order})
    }
    catch(e){
        res.status(400).json("Order Not Place")
        
    }
    
})

// Edit Order-- Admin 

router.put("/updateOrder/:id", authMiddleware , async(req,res)=>{
    try{
        const query = req.body
        let order = await Order.findById(req.params.id)
        if(!order){
            return res.status(200).json("Order Not Found ")
        }

        order = await Order.findByIdAndUpdate(req.params.id , {$set : query } , {new : true} )
         res.status(200).json({order})
    }
    catch(e){
        res.status(400).json("Order Not Place")
        
    }
})

router.delete("/deleteOrder/:id", authMiddleware , async(req,res)=>{
    try{
       
        
        const order = await Order.findByIdAndDelete(req.params.id  )
        if(!order){
            return res.status(200).json("Order Not Found ")
        }
        res.status(200).json({success : true})
    }
    catch(e){
        res.status(400).json("Order Not Place")
        
    }
})

export default router