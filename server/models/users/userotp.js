import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userOtpSchema = new Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  verification: {
    type: Boolean,
    default: false,
  },

  otpCode: {
    type: Number,
    default: null,
  },

  otpExpire: {
    type: Date,
    default: null,
  },
  //firebase token 
  fcmtoken:{
    type:String,
    default:null
  }
});

export default model("userotp", userOtpSchema);
