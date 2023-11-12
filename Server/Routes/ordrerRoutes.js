import { Router } from "express";
import Order from "../models/order.js";
import { authMiddleware, authorizeRoles } from "../Midware/authMiddleware.js";

const router = Router();

// //  get order detail

// router.get(
//   "/getOrder",
//   authMiddleware,
//   authorizeRoles(true),
//   async (req, res) => {
//     try {
//       const order = await Order.find();
//       res.status(200).json({ order });
//     } catch (e) {
//       res.status(400).json("Order Not Found");
//     }
//   },
// );

// //  place  order

// router.post("/placeOrder", authMiddleware, async (req, res) => {
//   try {
//     const order = await Order.create(req.body);
//     res.status(200).json({ order });
//   } catch (e) {
//     res.status(400).json("Order Not Place");
//   }
// });

// // Edit Order-- Admin

// router.put("/updateOrder/:id", authMiddleware, async (req, res) => {
//   try {
//     const query = req.body;
//     let order = await Order.findById(req.params.id);
//     if (!order) {
//       res.status(200).json("Order Not Found ");
//       return;
//     }

//     order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { $set: query },
//       { new: true },
//     );
//     res.status(200).json({ order });
//   } catch (e) {
//     res.status(400).json("Order Not Place");
//   }
// });

// router.delete("/deleteOrder/:id", authMiddleware, async (req, res) => {
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);
//     if (!order) {
//       res.status(200).json("Order Not Found ");
//       return;
//     }
//     res.status(200).json({ success: true });
//   } catch (e) {
//     res.status(400).json("Order Not Place");
//   }
// });

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
