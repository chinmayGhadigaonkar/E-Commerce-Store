import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    }, 
    product:[
        {productId:{type:String},
        quantity:{
            type: Number,
            default:1
        }}
    ]
    ,
    address:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    status:{
        type:String,
        Status:pending,
        required:true
    }

} ,{timestamps:true})


const order= mongoose.model("orderSchema",order)


export default order