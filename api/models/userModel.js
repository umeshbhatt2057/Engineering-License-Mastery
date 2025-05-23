import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true, default: false },
    resetToken: { type: String, default: null },
    resetTokenExpiry: { type: Date, default: null }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
