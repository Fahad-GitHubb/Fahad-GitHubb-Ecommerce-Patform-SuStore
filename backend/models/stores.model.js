import mongoose from "mongoose";
import Users from "./users.models.js";

const storesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    sellerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    haveAd: {
        type: Boolean,
        required: true,
        dfault: false
    },
    adCount: {
        type: Number,
        default: 0
    }
    
},{
    timestamps: true
})

const Stores = mongoose.model("Stores", storesSchema);
export default Stores;