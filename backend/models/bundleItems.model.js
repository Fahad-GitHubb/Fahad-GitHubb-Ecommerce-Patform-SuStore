import mongoose from 'mongoose';
import Bundles from './bundles.model.js';
import Products from './products.model.js';

const bundleItemsSchema = new mongoose.Schema({
    bundleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bundles",
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    }
},
{
    timestamps: true
})

const BundleItems = mongoose.model("BundleItems", bundleItemsSchema);
export default BundleItems;