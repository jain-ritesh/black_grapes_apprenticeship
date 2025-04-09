import mongoose from "mongoose";

const UserGraduateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  userType: { type: String, default: "Graduate" },
});

export const UserGraduate = mongoose.model("UserGraduate", UserGraduateSchema); // Named export