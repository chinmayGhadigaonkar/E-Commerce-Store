import mongoose from 'mongoose';

const connection = async()=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log(`Connected to Mongo Successfully`)
    }
    catch (error){
        console.log(error)
    }
}


export default connection