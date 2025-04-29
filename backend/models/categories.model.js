import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})

const Categories = mongoose.model("Categories", categoriesSchema);
export default Categories;