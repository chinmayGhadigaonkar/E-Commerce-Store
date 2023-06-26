import mongoose from 'mongoose';

const connection = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/ECommerce')
        console.log(`Connected to Mongo Successfully`)
    }
    catch (error){
        console.log(error)
    }
}


export default connection