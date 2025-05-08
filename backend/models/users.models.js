import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
    // id is automatically added
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String, 
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ["customer", "seller"],
        default: "customer",
        required: true
    },
    phone: {
        type: String,
        minlength: 11,
        maxlength: 11,
        required: true
    },
    
},
{
    timestamps: true
})

const Users = mongoose.model("Users", usersSchema);

export default Users; 