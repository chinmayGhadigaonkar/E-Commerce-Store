import { Router } from "express";
import Cart from "../models/cart.js";
import { authMiddleware } from "../Midware/authMiddleware.js";
const router = Router();

// get cart
router.get("/getcart", authMiddleware, async (req, res) => {
  try {
    const _id = req.user._id;

    const cart = await Cart.findOne({ user: _id });

    if (!cart) {
      res.status(400).json("cart does not exist");
      return;
    }
    res.status(200).json({ success: true, products: cart.products });
  } catch (e) {
    res.status(404).json({ e: "Something went to wrong " });
  }
});

// add  cart
router.post("/addtocart", authMiddleware, async (req, res) => {
  try {
    const _id = req.user._id;
    const { products } = req.body;
    const productName = products.title;

    const cart = await Cart.findOne({ user: _id });

    if (!cart) {
      res.status(400).json({ error: "Cart does not exist" });
      return;
    }
    const productsArray = cart.products;

    // check if that product already exist
    let isExist = false;
    productsArray.forEach((product) => {
      if (product.title === productName) {
        isExist = true;
      }
    });

    if (isExist) {
      res.status(400).json({ success: false, msg: "product already exists" });
      return;
    }

    productsArray.push(products);
    const result = await Cart.findByIdAndUpdate(cart._id, {
      products: productsArray,
    });

    res.status(200).json({
      success: true,
      msg: "Added to the cart successfully",
      products: productsArray,
    });
  } catch (error) {
    res.status(400).json({ error: "Something went'to Wrong" });
  }
});
// delete Item cart
router.delete("/deleteitem", authMiddleware, async (req, res) => {
  try {
    const _id = req.user._id;

    const { products } = req.body;
    const productName = products.title;

    const cart = await Cart.findOne({ user: _id });
    if (!cart) {
      res.status(404).json({ success: false, error: "Cart is not found" });
      return;
    }

    const productsArray = cart.products;

    const newArray = productsArray.filter((product) => {
      return product.title !== productName;
    });
    const result = await Cart.findByIdAndUpdate(
      cart._id,
      { products: newArray },
      { new: true },
    );

    res
      .status(200)
      .json({
        success: true,
        cart: result,
        msg: "Item delete form cart successfully",
      });
  } catch (e) {
    res.status(400).json({ e });
  }
});

//  Clear Cart
router.delete("/clearcart", authMiddleware, async (req, res) => {
  try {
    const _id = req.user._id;
    const cart = await Cart.findOne({ user: _id });

    if (!cart) {
      res.status(400).json({ success: false, error: "cart does not exist" });
      return;
    }

    const result = await Cart.findByIdAndUpdate(cart._id, { products: [] });
    res.status(200).json({ success: true, msg: "Your Cart is Clear" });
  } catch {
    res.status(400).json({ error: "Something went'to Wrong" });
  }
});

export default router;
