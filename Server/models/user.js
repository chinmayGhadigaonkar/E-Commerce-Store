import mongoose, { model } from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Enter your name']
    },
    email:{
        type:String,
        require:[true,'Enter your email'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'Enter your password']
    }
},{timestamps:true})


const User = mongoose.model('User', userSchema)

export default User 

