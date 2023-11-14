import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    shippingInfo: {},
    orderItems: [],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    orderStatus: {
      type: String,
      required: true,
      default: "Processing",
    },
    deliveredAt: {
      type: Date,
      default: null, // or you can omit this line if you want 'null' as the default
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
