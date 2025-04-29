import mongoose from "mongoose";
import Users from "./users.models.js";

const habitsSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    habits: {
        type: [String],
        required: true,
    }
},{
    timestamps: true
})

const Habits = mongoose.model("Habits", habitsSchema);
export default Habits;