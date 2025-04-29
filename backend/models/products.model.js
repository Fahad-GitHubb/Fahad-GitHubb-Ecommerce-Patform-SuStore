import mongoose from "mongoose";
import Categories from "./categories.model.js";
import Stores from "./stores.model.js";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        reuired: true
    },
    price: {
        type: Number, 
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }, 
    ecofriendly: {
        type: Boolean,
        default: false
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
        required: true,
    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stores",
        required: true
    },
},{
    timestamps: true // Automatically add createdAt and updatedAt fields
})

const Products = mongoose.model("Products", productsSchema)

export default Products;