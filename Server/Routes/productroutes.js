import express, { Router } from "express";
import Product from "../models/product.js";
import { authMiddleware, authorizeRoles } from "../Midware/authMiddleware.js";
import { json } from "stream/consumers";
import singleUpload from "../Midware/multer.js";
import getDataURI from "../utills/dataUrl.js";
const router = Router();
import cloudinary from "cloudinary";

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
    const products = await Product.find();
    let tshirts = {};

    for (let item of products) {
      if (item.title in tshirts) {
        if (
          !tshirts[item.title].size.includes(item.size) &&
          item.availableQty > 0 &&
          tshirts[item.title].color.includes(item.color)
        ) {
          tshirts[item.title].size.push(item.size);
        }
      } else {
        tshirts[item.title] = JSON.parse(JSON.stringify(item));
        if (item.availableQty > 0) {
          // tshirts[item.title].color = [item.color];
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
  // authMiddleware,
  // authorizeRoles(true),
  singleUpload,

  async (req, res) => {
    try {
      const {
        title,
        slug,
        desc,

        category,
        size,
        color,
        price,
        availableQty,
      } = req.body;

      const slugdata = await Product.find({ slug });
      // console.log(slugdata);

      if (!slugdata) {
        res.status(200).json({ msg: "slug should be unique  " });
        return;
      }

      const files = req.files;
      let fileDataUris = [];
      let imageUrl = [];

      for (let i = 0; i < files.length; i++) {
        fileDataUris.push(getDataURI(files[i]));
      }
      // console.log(fileDataUris);

      for (let i = 0; i < fileDataUris.length; i++) {
        const cloud = await cloudinary.v2.uploader.upload(
          fileDataUris[i].content,
        );
        imageUrl.push(cloud.url);
      }

      const data = new Product({
        title,
        slug,
        desc,
        img: imageUrl,
        category,
        size,
        color,
        price,
        availableQty,
      });
      const product = await data.save();
      res.status(200).json({ product });
    } catch (err) {
      res.status(404).json({ err: err.message });
    }
  },
);

// fetch a product using slug of title
router.get("/getproduct/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await Product.find({ slug });

    const products = await Product.find();

    let cproduct = {};

    cproduct[product[0].title] = {
      _id: product[0]._id,
      title: product[0].title,
      slug: product[0].slug,
      desc: product[0].desc,
      desc: product[0].desc,
      img: product[0].img,
      category: product[0].category,
      color: product[0].color,
      price: product[0].price,
      availableQty: product[0].availableQty,
      createdAt: product[0].createdAt,
      updatedAt: product[0].updatedAt,
      sizes: [product[0].size], // Start with the first size from the queried product
    };

    for (let item of products) {
      if (item.title === product[0].title && item.size !== product[0].size) {
        // Check for the same product title and different sizes
        cproduct[product[0].title].sizes.push(item.size);
      }
    }

    res.status(200).json({ product: cproduct });
    // res.status(200).json({ product: cproduct });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});

router.get("/getslugproduct/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await Product.find({ slug });

    res.status(200).json({ product: product });
    // res.status(200).json({ product: cproduct });
  } catch (err) {
    res.status(404).json({ err: err.message });
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

//
router.get("/:size", async (req, res) => {
  try {
    const { size } = req.params;
    const { title } = req.query;

    const tShirts = await Product.findOne({ size, title });

    if (tShirts.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No T-shirts found" });
    }

    res.status(200).json({ success: true, data: tShirts });
  } catch (err) {
    res.status(404).json({ err: "something went to wrong" });
  }
});

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
