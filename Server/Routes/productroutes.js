import express, { Router } from "express";
import Product from "../models/product.js";
import { authMiddleware, authorizeRoles } from "../Midware/authMiddleware.js";
import { json } from "stream/consumers";
const router = Router();

// fetch all products from database
router.get("/getproducts", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ product });
  } catch (err) {
    res.status(404).json({ err: "something went to wrong" });
  }
});

router.get("/getTshirt", async (req, res) => {
  try {
    const products = await Product.find({ category: "T-shirt" });
    let tshirts = {};

    for (let item of products) {
      if (item.title in tshirts) {
        if (
          !tshirts[item.title].color.includes(item.color) &&
          item.availableQty > 0
        ) {
          tshirts[item.title].color.push(item.color);
        }
        if (
          !tshirts[item.title].size.includes(item.size) &&
          item.availableQty > 0
        ) {
          tshirts[item.title].size.push(item.size);
        }
      } else {
        tshirts[item.title] = JSON.parse(JSON.stringify(item));
        if (item.availableQty > 0) {
          tshirts[item.title].color = [item.color];
          tshirts[item.title].size = [item.size];
        }
      }
    }

    res.status(200).json({ tshirts });
  } catch (err) {
    res.status(404).json({ err: "something went to wrong" });
  }
});

// add products in database   --- Admin
router.post(
  "/addproducts",
  authMiddleware,
  authorizeRoles(true),
  authMiddleware,
  async (req, res) => {
    try {
      const {
        title,
        slug,
        desc,
        img,
        category,
        size,
        color,
        price,
        availableQty,
      } = req.body;
      const data = new Product({
        title,
        slug,
        desc,
        img,
        category,
        size,
        color,
        price,
        availableQty,
      });
      const product = await data.save();
      res.status(200).json({ product });
    } catch (err) {
      res.status(404).json({ err: "something went to wrong" });
    }
  },
);

// fetch a product using slug
router.get("/getproduct/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await Product.find({ slug });
    res.status(200).json({ product });
  } catch (err) {
    res.status(404).json({ err: "something went to wrong" });
  }
});

// update a product using id   --- Admin
router.put(
  "/updateproduct/:id",
  authMiddleware,
  authorizeRoles(true),
  authMiddleware,
  async (req, res) => {
    try {
      const query = req.body;
      let product = await Product.findById(req.params.id);

      if (!product) {
        return "not found";
      }

      product = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: query },
        { new: true },
      );

      res.status(200).json({ success: true, product });
    } catch (err) {
      res.status(404).json({ err: "something went to wrong" });
    }
  },
);

router.put(
  "/updateproductquantity/:id",

  authMiddleware,
  async (req, res) => {
    try {
      let product = await Product.findById(req.params.id);
      if (!product) {
        return "not found";
      }

      const { availableQty } = product;

      product = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: { availableQty: availableQty - 1 } },
        { new: true },
      );

      res.status(200).json({ success: true, product });
    } catch (err) {
      res.status(404).json({ err: "something went to wrong" });
    }
  },
);
// delete product  --- Admin
router.delete(
  "/deleteproduct/:id",
  authMiddleware,
  authorizeRoles(true),
  authMiddleware,
  async (req, res) => {
    try {
      let data = await Product.findByIdAndDelete(req.params.id);
      if (!data) {
        return "Not found";
      }

      res
        .status(200)
        .json({ success: true, msg: "Delete Product sucessfully" });
    } catch (err) {
      res.status(404).json({ err: "something went to wrong" });
    }
  },
);

export default router;
