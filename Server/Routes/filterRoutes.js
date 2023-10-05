import { Router } from "express";
import Product from "../models/product.js"
const router= Router();

// Filter products
router.get("/products", async(req,res)=>{
  try{
    const { category, minPrice, maxPrice } = req.query;
  let filter ={};

  if (category) {
    filter.category = category;
  }
  if (minPrice && maxPrice) {
    filter.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };

  }
  const products = await Product.find({category:filter.category, price:filter.price});
  
  if (products.length === 0) {
    res.status(404).json({ message: 'No products found matching the criteria.' });
  } else {
    res.json(products);
  }

  }catch(error){
    res.status(500).json({ error: 'Internal Server Error' });

  }
  
})


//  pagination 
router.get('/pagination',async(req, res)=>{
  try{
    const { page, pageSize } = req.query;

    // Parse page and pageSize as integers (default to 1 and 10 if not provided)
    const pageNumber = parseInt(page, 10) || 1;
    const limit = parseInt(pageSize, 10) || 10;


    const skip = (pageNumber - 1) * limit;

    // Use Mongoose's 'find' method with skip and limit for pagination
    const products = await Product.find({})
      .skip(skip)
      .limit(limit);

    if (products.length === 0) {
      res.status(404).json({ message: 'No products found.' });
    } else {
      res.json(products);
    }

  }
  catch{
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


// Search Engine
router.get('/search',async (req, res) => {
  const query = req.query.query;

  if(query==""){
     res.status(400).json({success:false,message : "Please Enter a product name before Search"});
     return 
  }else{
    try {
      // Perform case-insensitive search based on product name
      const products = await Product.find({ $or:[
        {title: { $regex: query, $options: 'i' }},
        {category: { $regex: query, $options: 'i' }},
        {desc: { $regex: query, $options: 'i' }},
    ] });
      if(!products){
        res.status(400).json({success:false});
      }    
      res.status(200).json({success:true, products});
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    } 
  }
   
});

export default router