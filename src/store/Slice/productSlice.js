import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { VITE_BACKEND_URL } from "../../config";

const initialState = {
    products:[],
    status:'idle'
}

const STATUSES ={
    IDLE : "idle",
    ERROR : "error",
    LOADING : "loading"
}

const productSlice= createSlice({
    name : "products" ,
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(productFetch.pending, (state, action) => {
            
            state.status = STATUSES.LOADING
          })
        .addCase(productFetch.fulfilled, (state, action) => {
          state.products=action.payload
          state.status = STATUSES.IDLE
        })
        .addCase(productFetch.rejected, (state, action) => {
            state.status = STATUSES.ERROR
          })
      },
})


export const productFetch =  createAsyncThunk("fetch/allproduct", async(state , action)=>{
    const res = await fetch(`${VITE_BACKEND_URL}/products/getproducts`)
    const {product} = await res.json()
    return JSON.parse(JSON.stringify(product));
}
)


export const {} =productSlice.actions
export default productSlice.reducer



