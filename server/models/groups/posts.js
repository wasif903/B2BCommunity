import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  // title: String,
  description: String,
  media: [
    {
      type: {
        type: String, // Type of media - 'image' or 'video'
        required: true,
      },
      url: {
        type: String, // This will hold the URL of the image or video.
        required: true,
      },
    },
  ],
  
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "groups",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "seller",
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

export default model("posts", postSchema);
