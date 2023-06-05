import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  role: {
    type: [String],
    enum: ["User", "Seller"],
    default: ["User"],
    require: true,
  },
  
});

export default model("user", userSchema);
