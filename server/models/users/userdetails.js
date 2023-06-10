import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userDetailsSchema = new Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  firstName: {
    type: String,
    require: true,
  },

  lastName: {
    type: String,
    require: true,
  },

  companyName: {
    type: String,
    require: true,
  },

  VAT_ID: {
    type: String,
    require: true,
  },

  addressLine: {
    type: String,
    require: true,
  },

  zipCode: {
    type: Number,
    require: true,
  },

  city: {
    type: String,
    require: true,
  },

  country: {
    type: String,
    require: true,
  },
  //group 
  invitation: {
    type: String,
    enum: ['Rejected','Pending', 'Accepted'],
  },
  //user profile pic path 
  path:{
    type:String,
    default: null 
  }
});

export default model("userdetail", userDetailsSchema);
