import mongoose from "mongoose";

const UserUndergraduateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  userType: { type: String, default: "Undergraduate" },
});

export const UserUndergraduate = mongoose.model("UserUndergraduate", UserUndergraduateSchema); // Named export