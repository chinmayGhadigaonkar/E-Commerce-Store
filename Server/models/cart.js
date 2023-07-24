import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    products: [],
  },
  { timestamps: true },
);


const Cart  =  mongoose.model("cart" , cartSchema)

export default Cart;