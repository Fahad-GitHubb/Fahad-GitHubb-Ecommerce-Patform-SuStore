import mongoose from "mongoose";
import Wishlists from "./wishlists.model.js";
import Products from "./products.model.js"; 

const wishlistItemsSchema = new mongoose.Schema({
    wishListId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wishlists",
        required: true
    },
    productId: {    
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },

},{
    timestamps: true
})

const WishlistItems = mongoose.model("WishlistItems", wishlistItemsSchema);
export default WishlistItems;