import mongoose from "mongoose"
import Users from "./users.models.js"

const cartsSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
}, {
    timestamps: true
})

const Carts = mongoose.model("Carts", cartsSchema)

export default Carts