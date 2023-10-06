import mongoose from 'mongoose';

const wishlistItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User", // Reference to the User model, replace with your actual User model
    required: true,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "product", // Reference to the Product model, replace with your actual Product model
    required: true,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

const WishlistItem = mongoose.model('WishlistItem', wishlistItemSchema);

export default WishlistItem;
