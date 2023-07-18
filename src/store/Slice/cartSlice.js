import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


const initialState = []

const cartSlice = createSlice({
    name : "cart",
    initialState ,
    reducers:{
        addToCart(state,action){
            const isExist =state.find(item=>item._id===action.payload._id )
           if(isExist){
            toast.error("Product is already in cart ")
            return state
           }
           else{
               state.push(action.payload)
           }
        },
        removeCart(state,action){
            return state.filter(item=>item._id!== action.payload)
        }
    }

})


export const {addToCart , removeCart }= cartSlice.actions
export default cartSlice.reducer