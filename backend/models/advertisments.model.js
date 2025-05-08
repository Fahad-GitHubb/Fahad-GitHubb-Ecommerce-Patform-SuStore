
import mongoose from "mongoose"

const advertismentsSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stores",
        required: true,
    },
    adNumber: {
        type: Number, 
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        maxlength: 50
    }, 
    descrption: {
        type: String,
        required: true,
        maxlength: 100
    }, 
    tagline: {
        type: String, 
        required: true,
        maxlength: 30
    }
})

const AdvertismentSchema = mongoose.model("Advertisments", advertismentsSchema);
export default AdvertismentSchema;