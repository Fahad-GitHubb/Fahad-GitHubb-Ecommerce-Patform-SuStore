import mongoose from "mongoose";

const userFourmsSchema = new mongoose.Schema({

},{
    timestamps: true,
})

const UserFourms = mongoose.model("UserFourms", userFourmsSchema);
export default UserFourms;