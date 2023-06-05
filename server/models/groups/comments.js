import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const commentSchems = new Schema({
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
})

export default model("comments", commentSchems);