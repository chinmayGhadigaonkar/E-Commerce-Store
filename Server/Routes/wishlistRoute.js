import { Router } from "express"
import WishlistItem from "../models/wishlist.js";
import Product from "../models/product.js"
import {authMiddleware}  from '../Midware/authMiddleware.js'
const router= Router();

// Route to add a product to the authenticated user's wishlist
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { productId } = req.body; // Assuming you provide the productId in the request body
    const userId = req.user.id; // Get the authenticated user's ID from the middleware


    const existingWishlistItem = await WishlistItem.findOne({ user: userId,product: productId });
    if (existingWishlistItem) {
      // The product is already in the wishlist
      return res.status(400).json({ message: 'Product is already in the wishlist.' });
    }
    // Create a new WishlistItem document
    const newWishlistItem = new WishlistItem({
      user: userId, // Use the authenticated user's ObjectId
      product: productId, // Replace with the product's ObjectId
    });

    // Save the new wishlist item to the database
    const product= await newWishlistItem.save();

    res.status(201).json({ message: 'Item added to wishlist.'  });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route to get all wishlist products for the authenticated user
router.get('/get', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Get the authenticated user's ID from the middleware

    // Use the user's ID to find all wishlist items associated with that user
    const wishlistItems = await WishlistItem.find({ user: userId })
      .populate('product'); // Populate the 'product' field to get product details

    res.json(wishlistItems);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// remove product from wishlist

router.delete("/delete/:_itemId", authMiddleware,async (req, res) => {
  try {
    const userId = req.user.id
    const _itemId = req.params._itemId;
    

    const deletedItem= await WishlistItem.findOneAndRemove({product:_itemId ,user:userId});

    if (!deletedItem) {
      return res.status(404).json({ message: 'Wishlist item not found.' });
    }
    res.json({ message: 'Item removed from wishlist.' ,deletedItem });
  } catch (err) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
}) 


// Clear wishlist

router.delete("/clear", authMiddleware,async (req, res) => {
  try {
    const userId = req.user.id
  
  const deletedItem= await WishlistItem.deleteMany({user:userId});

  
    res.json({ message: 'Wishlist cleared.' });
  } catch (err) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
}) 



export default router