import mongoose from "mongoose"
import Carts from "./carts.model.js"
import Users from "./users.models.js"

const ordersSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        required: true
    },
    deliveryAddress: {
        type: String,
        required: trues
    },
    locations:{
        type: [String],
    },
    deliveryNotes: {
        type: String
    },
    deliveryDate : {
        type: Date
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Carts",
        required: true
    }
},
{
    timestamps: true
})

const Orders = mongoose.model("Orders", ordersSchema)

export default Orders