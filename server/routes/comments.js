import express from 'express';
import Group from '../models/groups/Group.js';
import user from '../models/users/user.js';
import comments from '../models/groups/comments.js';
import posts from '../models/groups/posts.js';

const router = express.Router();

router.post('/post-comment', async (req, res) => {

    try {

        const findGroup = await Group.findOne({ _id: req.body.groupID });
        const findPost = await posts.findOne({ _id: req.body.post, group: req.body.groupID });
        const findUser = await user.findOne({ _id: req.body.author })

        if (!findGroup) {
            res.status(404).json({ message: "Group Not Found" })
        } else if (!findPost) {
            res.status(404).json({ message: "Post Not Found" })
        } else {

            if (!findUser) {
                res.status(404).json({ message: "User Not Found" })
            } else {

                const createComment = new comments({
                    groupID: req.body.groupID,
                    content: req.body.content,
                    author: req.body.author,
                    post: req.body.post,
                })

                const saveComment = await createComment.save();
                res.status(200).json({ status: 200, saveComment });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})


router.post('/post-comment-reply', async (req, res) => {
    try {
        const findComment = await comments.findOne({ _id: req.body.commentID });
        const findUser = await user.findOne({ _id: req.body.author });

        if (!findComment) {
            return res.status(404).json({ message: "Comment Not Found" });
        } else if (!findUser) {
            return res.status(404).json({ message: "User Not Found" });
        } else {

            const reply = {
                content: req.body.content,
                author: req.body.author
            };

            findComment.replies.push(reply);
            await findComment.save();

            return res.status(200).json({ status: 200, reply });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.delete('/delete-comment/:commentID', async (req, res) => {
    try {
        const { commentID } = req.params;
        const deleteComment = await comments.findByIdAndDelete(commentID);

        if (deleteComment) {
            res.status(200).json({ message: "Comment Deleted Successfully", deleteComment })
        } else {
            res.status(404).json({ message: "Comment Not Found" })
        }

    } catch (error) {
        console.log(error);
    }
})

router.delete('/delete-reply/:commentID/:replyID', async (req, res) => {
    try {
        const commentID = req.params.commentID;
        const replyID = req.params.replyID;

        const findComment = await comments.findOne({ _id: commentID });

        if (!findComment) {
            return res.status(404).json({ message: "Comment Not Found" });
        }

        const replyIndex = findComment.replies.findIndex(reply => reply._id.toString() === replyID);

        if (replyIndex === -1) {
            return res.status(404).json({ message: "Reply Not Found" });
        }

        findComment.replies.splice(replyIndex, 1);
        await findComment.save();

        return res.status(200).json({ message: "Reply deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});


router.patch('/edit-comment/:commentID', async (req, res) => {
    try {
        const commentID = req.params.commentID;

        const findComment = await comments.findOne({ _id: commentID });

        if (!findComment) {
            return res.status(404).json({ message: "Comment Not Found" });
        }

        findComment.content = req.body.content; // Update the content with the new value
        await findComment.save();

        return res.status(200).json({ message: "Comment updated successfully", updatedComment: findComment });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.patch('/edit-reply/:commentID/:replyID', async (req, res) => {
    try {
        const commentID = req.params.commentID;
        const replyID = req.params.replyID;

        const findComment = await comments.findOne({ _id: commentID });

        if (!findComment) {
            return res.status(404).json({ message: "Comment Not Found" });
        }

        const replyIndex = findComment.replies.findIndex(reply => reply._id.toString() === replyID);

        if (replyIndex === -1) {
            return res.status(404).json({ message: "Reply Not Found" });
        }

        findComment.replies[replyIndex].content = req.body.content; // Update the content of the reply
        await findComment.save();

        return res.status(200).json({ message: "Reply updated successfully", updatedReply: findComment.replies[replyIndex] });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});




export default router;