import { Router } from "express";
import Product from "../models/product.js";
const router = Router();

// Filter products
router.get("/products", async (req, res) => {
  try {
    const { categories, sizes, minPrice, maxPrice } = req.query;

    const products = await Product.find();
    // Filtering logic based on query parameters

    let filteredProducts = products;

    if (categories) {
      const categoryArray = categories.split(","); // Convert comma-separated values to an array
      filteredProducts = filteredProducts.filter((product) =>
        categoryArray.includes(product.category),
      );
    }

    if (sizes) {
      const sizeArray = sizes.split(","); // Convert comma-separated values to an array
      filteredProducts = filteredProducts.filter((product) =>
        sizeArray.includes(product.size),
      );
    }

    if (minPrice && maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice,
      );
    }

    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Category wise product
router.get("/products/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });

    let cproduct = {};

    for (let item of products) {
      if (item.title in cproduct) {
        if (
          !cproduct[item.title].size.includes(item.size) &&
          item.availableQty > 0 &&
          cproduct[item.title].color.includes(item.color)
        ) {
          cproduct[item.title].size.push(item.size);
        }
      } else {
        cproduct[item.title] = JSON.parse(JSON.stringify(item));
        if (item.availableQty > 0) {
          // tshirts[item.title].color = [item.color];
          cproduct[item.title].size = [item.size];
        }
      }
    }
    // res.status(200).json({ tshirts });

    if (cproduct.length === 0) {
      res
        .status(404)
        .json({ message: "No products found matching the criteria." });
    } else {
      res.json({ products: cproduct });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  pagination
router.get("/pagination", async (req, res) => {
  try {
    const { page, pageSize } = req.query;

    // Parse page and pageSize as integers (default to 1 and 10 if not provided)
    const pageNumber = parseInt(page, 10) || 1;
    const limit = parseInt(pageSize, 10) || 10;

    const skip = (pageNumber - 1) * limit;

    // Use Mongoose's 'find' method with skip and limit for pagination
    const products = await Product.find({}).skip(skip).limit(limit);

    if (products.length === 0) {
      res.status(404).json({ message: "No products found." });
    } else {
      res.json(products);
    }
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Search Engine
router.get("/search", async (req, res) => {
  const { query } = req.query;

  if (query == "") {
    res.status(400).json({
      success: false,
      message: "Please Enter a product name before Search",
    });
    return;
  } else {
    try {
      // Perform case-insensitive search based on product name
      const products = await Product.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } },
          { desc: { $regex: query, $options: "i" } },
        ],
      });
      if (!products) {
        res.status(400).json({ success: false });
      }

      res.status(200).json({ success: true, products });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

export default router;
