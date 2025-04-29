import mongoose from "mongoose";
import Users from "./users.models.js";

const wishlistsSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
},{
    timestamps: true,
})

const Wishlists = mongoose.model("Wishlists", wishlistsSchema);
export default Wishlists;