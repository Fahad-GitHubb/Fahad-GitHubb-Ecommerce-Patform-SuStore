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
    // ecofriendly: {
    //     type: Boolean,
    //     default: false
    // },
    // categoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Categories",
    //     // required: true,
    // },
    category: {
        type: String,
    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stores",
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
    },
    bigDescription: {
        type: String,
    },
    details:{
        type: [String],
    },
},{
    timestamps: true // Automatically add createdAt and updatedAt fields
})

const Products = mongoose.model("Products", productsSchema)

export default Products;