import mongoose from "mongoose";
import Stores from "./stores.model.js";

const faqsSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stores",
        required: true,
    },
    questions: {
        type: [String],
        required: true,
    },
    answers: {
        type: [String],
        required: true,
    },
},{
    timestamps: true,
})

const Faqs = mongoose.model("Faqs", faqsSchema);
export default Faqs;