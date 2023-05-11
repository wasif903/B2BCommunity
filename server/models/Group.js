import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const GroupSchema = new Schema(
  
    {
    groupName: {
        type: String,
        require:true
    },

    sellerID :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Auth',
        require:true
    },
    
    userID :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Auth',
        require:true
    }]

  },
  { timestamps: true }
);

export default model("groups", GroupSchema);