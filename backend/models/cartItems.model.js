import mongoose from "mongoose"
import Carts from "./carts.model.js"
import Products from "./products.model.js"

const cartItemsSchema = new mongoose.Schema({
    cartId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Carts",
        required: true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },
    quanity: {
        type: Number,
        required: true,
        default: 1
    }

}, {
    timestamps: true
})

const CartItems = mongoose.model("CartItems", cartItemsSchema)

export default CartItems