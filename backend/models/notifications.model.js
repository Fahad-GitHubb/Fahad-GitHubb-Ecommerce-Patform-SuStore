import mongoose from "mongoose";
import Users from "./users.models.js";

const notificationsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
})

const Notifications = mongoose.model("Notifications", notificationsSchema);
export default Notifications;