import { Router } from "express";
import Order from "../models/order.js";
import { authMiddleware, authorizeRoles } from "../Midware/authMiddleware.js";

const router = Router();

// Route to create a new order
router.post("/createOrder", authMiddleware, async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
      taxPrice,
      shippingPrice,
      totalPrice,
      orderStatus,
    } = req.body;

    const newOrder = new Order({
      shippingInfo,
      orderItems,
      user: req.user._id,
      taxPrice,
      shippingPrice,
      totalPrice,
      orderStatus,
    });

    const savedOrder = await newOrder.save();

    

    res.status(201).json({ success: true, order: savedOrder });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Route to get all orders for a specific user with populated address and order items
router.get("/getOrder", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;

    const userOrders = await Order.find({ user: userId });

    res.status(200).json({ success: true, orders: userOrders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/getOrder/:id", authMiddleware, async (req, res) => {
  try {
    const _id = req.params.id;

    const userOrders = await Order.findById(_id);

    res.status(200).json({ success: true, orders: userOrders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete("/cancelorder/:id", authMiddleware, async (req, res) => {
  try {
    const _id = req.params.id;
    const userOrders = await Order.findByIdAndDelete({ _id });
    res.status(200).json({ success: true, orders: userOrders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
