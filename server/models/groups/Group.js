import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const GroupSchema = new Schema({
  groupName: { type: String, required: true },
  //path to group cover image
  groupdp: { type: String, default: null },
  groupcover: { type: String, default: null },
  groupDesc: { type: String, default: null },
  groupType: { type: String, default: null },
  grouplocation: { type: String, default: null },
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  pendingRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  invitedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

export default model("groups", GroupSchema);
