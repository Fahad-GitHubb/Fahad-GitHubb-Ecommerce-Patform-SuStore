import mongoose from "mongoose";

const bundlesSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stores",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    expirationDate: {
        type: Date,
    },
},{
    timestamps: true
})

const Bundles = mongoose.model("Bundles", bundlesSchema);
export default Bundles;