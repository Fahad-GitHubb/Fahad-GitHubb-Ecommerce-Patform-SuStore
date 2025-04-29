import mongoose from "mongoose"
import Users from "./users.models.js"
import Products from "./products.model.js"

const reviewsSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    comment: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

const Reviews = mongoose.model("Reviews", reviewsSchema);

export default Reviews;