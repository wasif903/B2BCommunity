import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
    groupID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups'
    },
    replies: [
        {
            content: String,
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model("comments", commentSchema);
