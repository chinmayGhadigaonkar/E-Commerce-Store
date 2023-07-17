import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const cartSlice = createSlice({
    name : "cart",
    initialState ,
    reducers:{
        addToCart(state,action){
            const isExist =state.find(item=>item.id===action.payload.id  )
           if(isExist){
            return state
           }
           else{
               state.push(action.payload)
           }
        },
        removeCart(state,action){
            return state.filter(item=>item.id!== action.payload)

        }
    }

})


export const {addToCart , removeCart }= cartSlice.actions
export default cartSlice.reducer