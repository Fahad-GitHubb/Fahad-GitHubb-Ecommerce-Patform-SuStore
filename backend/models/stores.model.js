import mongoose from "mongoose";
import Users from "./users.models.js";

const storesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // majorDescription: {
    //     type: String,
    //     required: true,
    // },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {  
        type: String,
        required: true,
    },
    sellerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    haveAd: {
        type: Boolean,
        default: true
    },
    adCount: {
        type: Number,
        default: 2
    },
    // rating: {
    //     type: Number,
    //     default: 0
    // },
    image: {
        type: String,
    },  
},{
    timestamps: true
})

const Stores = mongoose.model("Stores", storesSchema);
export default Stores;